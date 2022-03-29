
function runGentlemensCup() {

    let questions = getQuestionsEasy();
    let questionsMedium = getQuestionsMedium();
    let questionsHard = getQuestionHard();
    let questionsExtreme = getQuestionsExtreme();
    let categories = getCategories();
    let parentCategories = getParentCategories();
    
    const numQuestions = questions.length;
    const runPage = true;
    let gameInProgress = false;
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
    let listOfIntSizeTen; //used for gentlemens cup only
    
    const containerBox = document.querySelector('.buttonContainer');
    let StartBtn = document.getElementById('start');
    const RestartBtn = document.getElementById('restart');
    const NextButton = document.getElementById('next');
    const audioContainer = document.getElementById('audioContainer');
    const pastAnswerDisplay = document.getElementById('pastAnswersDisplay');
    const containerQuiz = document.getElementById('quizContainer');
    const currentScoreButton = document.getElementById('currentScoreButton');
    const achievContainer = document.getElementsByClassName('highScoreContainer');
    const frontpageText = document.getElementById('welcomeText');
    let gameIsOver = false;


    beforeGameGentlemensCup();

    function beforeGameGentlemensCup() {
        StartBtn.setAttribute('class', 'startbtn')
        StartBtn.addEventListener('click', event => startGameGentlemen());
        quizContainer.classList.remove('hide')
        highScoreContainer.classList.remove('hide')
        frontpageText.classList.add('hide')

        categories[0].numToAppend = 0;      //Reduced number to append because there are less buttons in this mode
        categories[1].numToAppend = 4;
        categories[2].numToAppend = 5;
        categories[3].numToAppend = 2;
        categories[4].numToAppend = 0;
        categories[5].numToAppend = 0;
        categories[6].numToAppend = 0;
        categories[7].numToAppend = 4;
        categories[8].numToAppend = 6;
        categories[9].numToAppend = 0;
        categories[10].numToAppend = 0;
        categories[11].numToAppend = 2;
        categories[12].numToAppend = 2;
        categories[13].numToAppend = 0;
        categories[14].numToAppend = 5;
        categories[15].numToAppend = 3;
    }

    function assignAnswerTextGentlemen(question){ //Randomly assigns text button answers from the category array
    //                                   //The category array already contains random similar text entries but the order is not ramdonized yet
    //                                   //There is one for loop for each difficulty 
        //console.log('assignAnswerTextGentlemen is run')
        const listOfIntsSizeCategory = Array.apply(null, {length: categories[question.category].text.length}).map(Number.call, Number) //creates array of integers equal to number of questions
        listOfIntsSizeCategory.sort(() => Math.random() - 0.5);

        let numButtonsList = Array.apply(null, {length: question.numButtons}).map(Number.call, Number);
        numButtonsList.sort(() => Math.random() - 0.5);

        numButtonsList = numButtonsList.filter(function(val) { //Removes the zero from listOfInts so that the correct answer is not removed from text entries
        return val !== 0;
        });
        let categoryIndex = 0;

        console.log(question)
        console.log(categories[categoryIndex])

        while (question.answers.length < question.numButtons) {
            question.answers.push({text: 'pushed', correct: false})
        }


        for (i=0; i < Number(question.numButtons)-1 ; i++) { 
                while (question.answers[0].text === categories[question.category].text[listOfIntsSizeCategory[categoryIndex]]) { //The while loops ensures that a second correct text entry is not added
                    categoryIndex++;//Ensures a second correct answer is not added into the button answers
                }
            question.answers[numButtonsList[i]].text = categories[question.category].text[listOfIntsSizeCategory[categoryIndex]] //Assingns random entries from category to the buttons
            categoryIndex++;
            if (question.answers[numButtonsList[i]].text === undefined) {question.answers[numButtonsList[i]].text = "Johann Strauss II - Artsis's life"} //Gives any undefined buttons a default answer
            }
        question.answers = question.answers.filter(function(el) { return el.text != "pushed"; }); 
    }

    function addRandomEntriesToCategoryGentlemen(question) { //This function adds random entries from the parent array to the question category
        //console.log('addRandomEntriesToCategory is run')
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

        assignAnswerTextGentlemen(question)

        for (i = 0; i < numToAppend; i++) { //Removes the entries from parent categories so the next call to this category starts over
            categories[categoryID].text = categories[categoryID].text.filter(e => e !== parentCategories[appendArrayID][listOfIntsSizeCategory[i]])
        }
    }

    function startGameGentlemen() {
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
        setNextQuestionGentlemen(questions[easyQuestionCounter]);
    }

    function setNextQuestionGentlemen(question) {
        //console.log('setNextQuestion is run')
        question.numButtons = 6;
        addRandomEntriesToCategoryGentlemen(question)
        playAudioGentlemen(question);
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
            button.addEventListener('click', selectAnswerGentlemen);
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

    function playAudioGentlemen(question) {
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

    function selectAnswerGentlemen(e) {
        //console.log('selectAnswer is run')
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
            gameIsOver = true;

            for (i=0; i < allButtons.length; i++) {
                if (allButtons[i].dataset.correct){
                allButtons[i].classList.add('correct'); //Makes the correct answer become green when user selects an incorrect answer
                }
            }
        }
        containerBox.classList.add('disable');
        NextButton.classList.remove('hide');
        NextButton.addEventListener('click', prepareNextQuestionGentlemen)
        totalQuestionCounter++;
    }

    function printLastQuestionGentlemen () { //Prints out the correct answer below the buttons for user to see their question history
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
        }
        else {
            div.setAttribute('class', 'wrong')
        }
        const text= document.createTextNode(textToWrite)
        div.appendChild(text)
        pastAnswerDisplay.appendChild(div)
    }

    function prepareNextQuestionGentlemen() {
        //console.log('prepareNextQuestion is run')
        while (containerBox.firstChild) { /*Deletes each of the previous buttons */
        containerBox.removeChild(containerBox.firstChild);
        NextButton.classList.add('hide');
        containerBox.classList.remove('disable');
        }
        printLastQuestionGentlemen();
        currentScoreButton.classList.remove('hide');
        pastAnswerDisplay.classList.add('pastAnswerDisplayBorder')
        currentScoreButton.innerText = totalnumCorrect + '/' + totalQuestionCounter;



        if ( totalQuestionCounter % 5 === 0 && totalQuestionCounter !== 0) {
            currentDifficulty++
        }
        if (currentDifficulty === 0) { //questions 0 - 5        //Each digit is 10% probability, 0=easy, 1=medium, hard=2, extreme=3
            listOfIntSizeTen  = [0,0,0,0,0,1,1,1,1,1];
        }
        if (currentDifficulty === 1) { //questions 5 - 10
            listOfIntSizeTen  = [0,0,1,1,1,1,1,2,2,2];
        }
        if (currentDifficulty === 2) { //questions 10 - 15
            listOfIntSizeTen  = [1,1,1,2,2,2,2,3,3,3];
        }
        if (currentDifficulty === 4) { //questions 15 - 20
            listOfIntSizeTen  = [1,2,2,2,2,2,3,3,3,3];
        }
        if (currentDifficulty === 5) { //questions 20 - 25
            listOfIntSizeTen  = [2,2,2,2,2,3,3,3,3,3];
        }
        if (currentDifficulty >= 6) { //questions 25 - end
            listOfIntSizeTen  = [2,2,2,2,3,3,3,3,3,3];
        }
        listOfIntSizeTen.sort(() => Math.random() - 0.5); //Scrambles the list of integers so difficulty is given by probability 

        console.log('Current Difficulty is ' + currentDifficulty)

        if (easyQuestionCounter >= questions.length){ //Removes zeros and replaces with 1s, if no more easy questions available
            for (i = 0; i < listOfIntSizeTen.length; i++) {
                if (listOfIntSizeTen[i] === 0) {
                    listOfIntSizeTen[i] = 1;
                } 
            }
        }
        if (mediumQuestionCounter >= questionsMedium.length) { //Removes 1s and replaces with 2s, if no more medium questions available
            for (i = 0; i < listOfIntSizeTen.length; i++) {
                if (listOfIntSizeTen[i] === 1) {
                    listOfIntSizeTen[i] = 2;
                } 
            }
        }
        if (hardQuestionCounter >= questionsHard.length) {//Removes 2s and replaces with 3s, if no more hard questions available
            for (i = 0; i < listOfIntSizeTen.length; i++) {
                if (listOfIntSizeTen[i] === 2) {
                    listOfIntSizeTen[i] = 3;
                }
            }
        }
        if (extremeQuestionCounter >= questionsExtreme.length && hardQuestionCounter < questionsHard.length) {
            for (i = 0; i < listOfIntSizeTen.length; i++) {//Removes 3s and replaces with 2s, if no more extreme available, and if hard is avaiable
                if (listOfIntSizeTen[i] === 3) {
                    listOfIntSizeTen[i] = 2;
                } 
            }
        } 
        if ((extremeQuestionCounter >= questionsExtreme.length && hardQuestionCounter >= questionsHard.length) || gameIsOver === true) {
            afterGameEndsGentlemen(); //Ends game if hard and extreme questions run out
        }
        else {

            if (listOfIntSizeTen[0] === 0) { //The following four if statements decide which difficulty of question is sent to user (based on probability)
                console.log('Easy is run')
                setNextQuestionGentlemen(questions[easyQuestionCounter])
                easyQuestionCounter++
            } 

            if (listOfIntSizeTen[0] === 1) { //##################### Medium ###########################
                console.log('Medium is run')
                setNextQuestionGentlemen(questionsMedium[mediumQuestionCounter])
                mediumQuestionCounter++
            } 

            if (listOfIntSizeTen[0] === 2) { //##################### Hard ###########################
                console.log('Hard is run')
                setNextQuestionGentlemen(questionsHard[hardQuestionCounter])
                hardQuestionCounter++
            }

            if (listOfIntSizeTen[0] === 3) { //##################### Extreme ###########################
                console.log('Extreme is run')
                setNextQuestionGentlemen(questionsExtreme[extremeQuestionCounter])
                extremeQuestionCounter++
            }
        }
        console.log(questions.length-easyQuestionCounter + ' Easy questions remaining')
        console.log(questionsMedium.length-mediumQuestionCounter + ' medium questions remaining')
        console.log(questionsHard.length-hardQuestionCounter + ' hard questions remaining')
        console.log(questionsExtreme.length-extremeQuestionCounter + ' extreme questions remaining')
    }

    function afterGameEndsGentlemen() {
        console.log('game is over')
        containerBox.classList.remove('gridColumns'); //Removes grid layout of container so that restart button is centered
        const button = document.createElement('button'); 
        button.innerText = 'Congrats! You got to: ' + totalnumCorrect;
        button.classList.add('gameEndText')
        containerBox.appendChild(button)
        questionCounter = 0;
    }
}