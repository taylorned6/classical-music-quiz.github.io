
let questions = getQuestionsEasy();
let questionsMedium = getQuestionsMedium();
let questionsHard = getQuestionHard();
let questionsExtreme = getQuestionsExtreme();
let categories = getCategories();
let parentCategories = getParentCategories();

const containerBox = document.querySelector('.buttonContainer');
const StartBtn = document.getElementById('start');
const RestartBtn = document.getElementById('restart');
const NextButton = document.getElementById('next');
const audioContainer = document.getElementById('audioContainer');
const pastAnswerDisplay = document.getElementById('pastAnswersDisplay');
const quizToFiftyButton = document.getElementById('classicQuizButton');
const containerQuiz = document.getElementById('quizContainer');
const currentScoreButton = document.getElementById('currentScoreButton');
const achievContainer = document.getElementsByClassName('highScoreContainer');
const frontpageText = document.getElementById('welcomeText');
const numQuestions = questions.length;
let currentScore;
let currentQuestion; 
let currentDifficulty = 0; //This variables keeps track of question difficulty that is sent to user, 0=easy,1=medium,2=hard,4=hardest
let easyQuestionCounter = 0;
let mediumQuestionCounter = 0;
let hardQuestionCounter = 0;
let extremeQuestionCounter = 0;
let totalQuestionCounter = 0;
let totalnumCorrect = 0;
let tempNumCorrect = 0; //This variables goes up everytime user gets one correct. If it hits 3 the difficulty moves up and value resets
let tempNumWrong = 0; //This variables goes up everytime user gets one wrong. If it hits 3 the difficulty moves down and value resets
let increasedDiff = false;//These two variables are true for a question that has increased/decreased difficulty
let decreasedDiff = false;
let userIsCorrect = false;

function assignAnswerText(question){ //Randomly assigns text button answers from the category array
//                                   //The category array already contains random similar text entries but the order is not ramdonized yet
//                                   //There is one for loop for each difficulty 
    const listOfIntsSizeCategory = Array.apply(null, {length: categories[question.category].text.length}).map(Number.call, Number) //creates array of integers equal to number of questions
    listOfIntsSizeCategory.sort(() => Math.random() - 0.5);

    let numButtonsList = Array.apply(null, {length: question.numButtons}).map(Number.call, Number);
    numButtonsList.sort(() => Math.random() - 0.5);

    numButtonsList = numButtonsList.filter(function(val) { //Removes the zero from listOfInts so that the correct answer is not removed from text entries
    return val !== 0;
    });
    let categoryIndex = 0;

    if (decreasedDiff === true) {
        question.answers.push({text: 'pushed', correct: false})
        question.answers.push({text: 'pushed', correct: false})
        question.answers.push({text: 'pushed', correct: false})
    }

    for (i=0; i < Number(question.numButtons)-1 ; i++) { 
            while (question.answers[0].text === categories[question.category].text[listOfIntsSizeCategory[categoryIndex]]) { //The while loops ensures that a second correct text entry is not added
                categoryIndex++;
            }
        question.answers[numButtonsList[i]].text = categories[question.category].text[listOfIntsSizeCategory[categoryIndex]] //Assingns random entries from category to the buttons
        categoryIndex++;
        }
    question.answers = question.answers.filter(function(el) { return el.text != "pushed"; }); 
}

function addRandomEntriesToCategory(question) { //This function adds random entries from the parent array to the question category
    const categoryID = question.category;
    const numToAppend = categories[categoryID].numToAppend;
    const appendArrayLength = parentCategories[categories[categoryID].appendFrom].length
    const appendArrayID = categories[categoryID].appendFrom //piano


    const listOfIntsSizeCategory = Array.apply(null, {length: appendArrayLength}).map(Number.call, Number)
    listOfIntsSizeCategory.sort(() => Math.random() - 0.5);

    for (i = 0; i < numToAppend; i++) { //appends parent categories to the categories array based 
        categories[categoryID].text.push(parentCategories[appendArrayID][listOfIntsSizeCategory[i]]);
    }

    categories[question.category].text = categories[question.category].text.filter(function(item, pos) { //Removes any duplicate entries
        return categories[question.category].text.indexOf(item) == pos;
    })
    assignAnswerText(question)

    for (i = 0; i < numToAppend; i++) { //Removes the entries from parent categories so the next call to this category starts over
        categories[categoryID].text = categories[categoryID].text.filter(e => e !== parentCategories[appendArrayID][listOfIntsSizeCategory[i]])
    }

}





beforeGame() //Begins the code by calling the first function

function beforeGame() {
StartBtn.setAttribute('class', 'startbtn')
StartBtn.addEventListener('click', event => startGame());
quizToFiftyButton.addEventListener('click', event => {
    quizContainer.classList.remove('hide')
    console.log('run')
    highScoreContainer.classList.remove('hide')
    frontpageText.classList.add('hide')
})
}

function startGame() {
    StartBtn.classList.add('hide'); //Hides the start button when game begins
    containerBox.setAttribute('class', 'gridColumns buttonContainer')
    questions.sort(() => Math.random() - 0.5); //Randomes order of questions array
    questionsMedium.sort(() => Math.random() - 0.5);
    questionsHard.sort(() => Math.random() - 0.5);
    questionsExtreme.sort(() => Math.random() - 0.5);
    console.log(questions)
    console.log(questionsMedium)
    console.log(questionsHard)
    console.log(questionsExtreme)
    setNextQuestion(questions[easyQuestionCounter]);
}

function setNextQuestion(question) {
    console.log(questions.length-easyQuestionCounter)
    console.log(questionsMedium.length-mediumQuestionCounter)
    console.log(questionsHard.length-hardQuestionCounter)
    console.log(questionsExtreme.length-extremeQuestionCounter)
    console.log(question)

    addRandomEntriesToCategory(question)
    playAudio(question);
    currentQuestion = question;
    userIsCorrect = false;

    increasedDiff = 0;
    decreasedDiff = 0;
    let numButtonsCreated = 0;
    let answerInButtonGroup = false;

    question.answers.sort(() => Math.random() - 0.5) //Scrambles all text answers to be displayed
    question.answers.forEach(answer => { //Creates a button for each answer and assigns it appropriately
        if (numButtonsCreated < question.numButtons) {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.setAttribute('class', 'btn');
        button.id = numButtonsCreated; //Creates a button ID 1-end for each button
        containerBox.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct; //Assings true to the correct answer
            answerInButtonGroup = true; //Checks if correct answer is already included in displayed buttons 
        }
        button.addEventListener('click', selectAnswer);
        numButtonsCreated++;
    }
    if (answer.correct) {
        const correctAnswerIndex = numButtonsCreated;
    }
    })
    if (answerInButtonGroup === false) { //This loop picks a random button to replace with the correct button information and values
        let listOfInts = Array.apply(null, {length: question.numButtons}).map(Number.call, Number) //creates array of integers equal to numButtons
        listOfInts.sort(() => Math.random() - 0.5);
        const button = document.getElementById(listOfInts[1]); //Selects a random button
        question.answers.forEach(answer => { //Loops through each button to find the correct one
            if (answer.correct) {
                button.dataset.correct = answer.correct;
                button.innerText = answer.text;
            }
        })
    }
}

function playAudio(question) {
    let audioFile = document.createElement('audio');

    audioFile.setAttribute('src', question.fileName);
    audioFile.addEventListener('canplaythrough', function() {
        if(this.currentTime < question.playTimeStart){
            this.currentTime = question.playTimeStart;
        }
        this.play();
        setTimeout(function() {
            audioFile.pause()}, 30000)   
    })

    const audioButton = document.createElement('button')
    audioButton.setAttribute('class', 'audioButton')
    audioContainer.appendChild(audioButton);
    audioButton.innerText = 'Restart Audio'
    audioButton.addEventListener('click', event => {
    audioFile.setAttribute('src', question.fileName);
    audioFile.play()
    })
    NextButton.addEventListener('click', event => {
        audioFile.pause()
        audioButton.setAttribute('class', 'hide')
    })
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        totalnumCorrect++;
        tempNumCorrect++;
        selectedButton.classList.add('correct');
        userIsCorrect = true;
    }
    else {
        selectedButton.classList.add('wrong');
        tempNumWrong++;
        const allButtons = document.getElementsByClassName('btn') 

        for (i=0; i < allButtons.length; i++) {
            if (allButtons[i].dataset.correct){
            allButtons[i].classList.add('correct'); //Makes the correct answer become green when user selects an answer
          
            }
        }
    }
    containerBox.classList.add('disable');
    NextButton.classList.remove('hide');
    NextButton.addEventListener('click', prepareNextQuestion)
    totalQuestionCounter++;
}

function printLastQuestion () { //Prints out the correct answer below the buttons for user to see their question history
    const question = currentQuestion;
    const allButtons = document.getElementsByClassName('btn');
   
    let textToWrite = '';

    for (i=0; i < question.answers.length; i++) { //Loop over each answer

        if (question.answers[i].correct){
            textToWrite = question.answers[i].text;
        }
    }

    const div = document.createElement('div');
    if (userIsCorrect) {
        div.setAttribute('class', 'correct')
        console.log('user is correct')
    }
    else {
        div.setAttribute('class', 'wrong')
        console.log('user is wrong')
    }
    const text= document.createTextNode(textToWrite)
    div.appendChild(text)
    pastAnswerDisplay.appendChild(div)
}


function prepareNextQuestion() {
    while (containerBox.firstChild) { /*Deletes each of the previous buttons */
    containerBox.removeChild(containerBox.firstChild);
    NextButton.classList.add('hide');
    containerBox.classList.remove('disable');
    }
    printLastQuestion();
    currentScoreButton.classList.remove('hide');
    pastAnswerDisplay.classList.add('pastAnswerDisplayBorder')
    currentScoreButton.innerText = totalnumCorrect + '/' + totalQuestionCounter;

    increasedDiff = false;
    decreasedDiff = false;
    if (totalQuestionCounter < 50) { //Moves the difficulty up or down when user gets 3 correct or wrong
        if (tempNumCorrect === 4) {
            currentDifficulty++;
            if (currentDifficulty === 4) {
                currentDifficulty = 3
                tempNumCorrect = 0
            }
            else {
                tempNumCorrect = 0; //Resets the correct/wrong counters when difficulty changes
                tempNumWrong = 0;
                console.log('Difficulty moved up')
            }
            
        }
        if (tempNumWrong === 3) {
            currentDifficulty--;
            if (currentDifficulty === -1) {currentDifficulty = 0} //prevents the difficulty from going below easy (or 0)
            tempNumCorrect = 0; //Resets the correct/wrong counters when difficulty changes
            tempNumWrong = 0;
            console.log('Difficulty moved down')
        }

        const listOfIntSizeFour = [0,1,2,3,4,5,6,7];
        listOfIntSizeFour.sort(() => Math.random() - 0.5);

        if (listOfIntSizeFour[0] <= 1 && currentDifficulty < 3) { //25% chance to get a question with increased difficulty
            //currentDifficulty++;
            increasedDiff = true;
        } 
        if (listOfIntSizeFour[0] === 2 && currentDifficulty > 0) {//12.5% chance to get a question with decreased difficulty
            //currentDifficulty--;
            decreasedDiff = true;
            console.log('decreasedDiff')
        }  

        if (currentDifficulty === 0) {//########################### EASY
            console.log('easy is run')
            easyQuestionCounter++; //Count goes up before function because question 0 is given at start of game
            if (easyQuestionCounter < questions.length && increasedDiff === false) { //Gives easy question if possible
                setNextQuestion(questions[easyQuestionCounter])
            }
            else if (mediumQuestionCounter < questionsMedium.length) {
                questionsMedium[mediumQuestionCounter].numButtons = 3; //If no more easy questions left, gives a medium question with 3 buttons
                setNextQuestion(questionsMedium[mediumQuestionCounter])
                console.log('easy is run with medium questions')
                mediumQuestionCounter++;
            }
            else if (hardQuestionCounter < questionsHard.length) {
                questionsHard[hardQuestionCounter].numButtons = 3; //If no more easy questions left, gives a medium question with 3 buttons
                setNextQuestion(questionsHard[hardQuestionCounter])
                hardQuestionCounter++;
            } 
            else {
                questionsExtreme[extremeQuestionCounter].numButtons = 3; //If no more easy questions left, gives a medium question with 3 buttons
                setNextQuestion(questionsExtreme[extremeQuestionCounter])
                extremeQuestionCounter++;
            }
        }
        if (currentDifficulty === 1) {//########################### MEDIUM
            if (easyQuestionCounter+1 < questions.length && decreasedDiff === true) {
                easyQuestionCounter++;
                questions[easyQuestionCounter].numButtons = 6;
                setNextQuestion(questions[easyQuestionCounter])
            }
            else if (mediumQuestionCounter < questionsMedium.length && increasedDiff === false) {
                setNextQuestion(questionsMedium[mediumQuestionCounter]);
                mediumQuestionCounter++; //Count goes up after so that function is passed zero at first
                console.log('Medium is run')
            }
            else if (hardQuestionCounter < questionsHard.length ) {
                questionsHard[hardQuestionCounter].numButtons = 6;
                setNextQuestion(questionsHard[hardQuestionCounter]);
                hardQuestionCounter++;
                console.log('medium is run with hard questions')
            } 
            else {
                questionsExtreme[extremeQuestionCounter].numButtons = 6;
                setNextQuestion(questionsExtreme[extremeQuestionCounter]);
                extremeQuestionCounter++;
            }
        }
        if (currentDifficulty === 2) {//########################### HARD
            
            if (hardQuestionCounter < questionsHard.length && increasedDiff === false && decreasedDiff === false) {
                setNextQuestion(questionsHard[hardQuestionCounter]);
                hardQuestionCounter++; //Count goes up after so that function is passed zero at first
                console.log('hard is run');
            }
            else if (mediumQuestionCounter < questionsMedium.length && decreasedDiff === true) {
                questionsMedium[mediumQuestionCounter].numButtons = 9;
                setNextQuestion(questionsMedium[mediumQuestionCounter]);
                mediumQuestionCounter++; //Count goes up after so that function is passed zero at first
                console.log('Hard is run with medium questions')
            }
            else if (extremeQuestionCounter < questionsExtreme.length && increasedDiff === true) {
                questionsExtreme[extremeQuestionCounter].numButtons = 9;
                setNextQuestion(questionsExtreme[extremeQuestionCounter]);
                extremeQuestionCounter++; //Count goes up after so that function is passed zero at first
                console.log('Hard is run with extreme questions')
            }
            //below happens if no more hard questions50% chance of giving a medium question (if possible), otherwise gives extreme
            else if ((mediumQuestionCounter < questionsMedium.length && listOfIntSizeFour <= 3) || extremeQuestionCounter >= questionsExtreme.length) {
                questionsMedium[mediumQuestionCounter].numButtons = 9;
                setNextQuestion(questionsMedium[mediumQuestionCounter]);
                mediumquestionCounter++;
                console.log('hard is run with medium questions')
            }
            else {
                questionsExtreme[extremeQuestionCounter].numButtons = 9;
                setNextQuestion(questionsExtreme[extremeQuestionCounter]);
                extremeQuestionCounter++;
                console.log('hard is run with extreme questions')
            }
        }
        if (currentDifficulty === 3) {//########################### EXTREME
            if (extremeQuestionCounter < questionsExtreme.length && decreasedDiff === false) {
                console.log('extreme is run');
                setNextQuestion(questionsExtreme[extremeQuestionCounter]);
                extremeQuestionCounter++; //Count goes up after so that function is passed zero at first
            }
            else if (hardQuestionCounter < questionsExtreme.length) {
                questionsHard[hardQuestionCounter].numButtons = 12;
                setNextQuestion(questionsHard[hardQuestionCounter]);
                hardQuestionCounter++;
                console.log('extreme is run with hard quesiton');
            }
            else {
                questionsMedium[mediumQuestionCounter].numButtons = 12;
                setNextQuestion(questionsMedium[mediumQuestionCounter]);
                mediumQuestionCounter++;
                console.log('extreme is run with medium quesiton');
            }
        }
    }
    else {
        afterGameEnds();
    }
}

function afterGameEnds() {
    containerBox.classList.remove('gridColumns'); //Removes grid layout of container so that restart button is centered
    const button = document.createElement('button'); 
    button.innerText = 'Congrats! You scored: ' + totalnumCorrect + '/' + totalQuestionCounter;
    button.classList.add('gameEndText')
    containerBox.appendChild(button)
    questionCounter = 0;
}