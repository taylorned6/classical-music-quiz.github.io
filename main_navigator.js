



const NextButton = document.getElementById('next');
const containerBox = document.querySelector('.buttonContainer');
const quizToFiftyButton = document.getElementById('classicQuizButton');
const gentlmensCupButton = document.getElementById('gentlemensCupButtons');


    quizToFiftyButton.addEventListener('click', function () {
        clearDisplay();
        runclassiCQuizTo50();
    });
    gentlmensCupButton.addEventListener('click', function () {
        clearDisplay();
        runGentlemensCup();
    });


function clearDisplay() {
    while (containerBox.firstChild) { /*Deletes each of the previous buttons */
    containerBox.removeChild(containerBox.firstChild);
    NextButton.classList.add('hide');
    containerBox.classList.remove('disable');
    }
    StartBtn = document.createElement('button');
    StartBtn.setAttribute('Id', 'start');
    StartBtn.classList.add('startbtn');
    StartBtn.innerText = 'Start Quiz';
    containerBox.classList.remove('gridColumns')
    containerBox.appendChild(StartBtn);
}




function refresh() {
    window.location.reload() 
    return false;
}