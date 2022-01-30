//Variables

let inputRange = document.querySelector('#inputrange');
let showScore = document.querySelector('#show-score');
const normalWeight = document.querySelector('.normal');
const underWeight = document.querySelector('.underweight');
const overWeight = document.querySelector('.overweight');
const dogIcon = document.querySelector('.fa-paw');
let scoreContainer = document.querySelector('.score-container');
let warnMessage = document.querySelector('.warning-message');


showScore.value = 0;

//function triggers when the user moves the range bar on the smartphone


inputRange.addEventListener('touchmove', (e)=>{
    let valueScore = e.target.value;

    //showing the value on the screen
    showScore.value = valueScore;



    switch(true){

    //what happens if the value is below 30
        case ((valueScore >=0.01) && (valueScore <30)):
            underWeight.style.visibility = "visible";
            normalWeight.style.visibility = "hidden";
            overWeight.style.visibility = "hidden";
            dogIcon.style.color = "#f74f4f";
            break;

    //what happens if the value is between 30 and lower than 90 
        case ((valueScore >=30) && (valueScore < 90)):
            normalWeight.style.visibility = "visible";
            overWeight.style.visibility = "hidden";
            underWeight.style.visibility = "hidden";
            dogIcon.style.color="#45b27D";
            break;

    //what happens if the value is over 90
        case (valueScore >=90):
            overWeight.style.visibility = "visible";
            normalWeight.style.visibility = "hidden";
            underWeight.style.visibility = "hidden";
            dogIcon.style.color = "#000000";
            break;


     //what happens if the value is equal to 0 or to an empty string
        case ((valueScore == 0) || (valueScore =="")):
            inputRange.value = 0;
            overWeight.style.visibility = "hidden";
            normalWeight.style.visibility = "hidden";
            underWeight.style.visibility = "hidden";
            dogIcon.style.color = "#589fc9";

    }
    
})

// function triggers when the user moves the range bar with the mouse
inputRange.addEventListener('mousemove', (e)=>{

    let valueScore = e.target.value;

    //showing the value on the screen
    showScore.value = valueScore;

    warnMessage.style.visibility = 'hidden';
    //what happens if the value is below 30
    switch(true){
        case ((valueScore >=0.01) && (valueScore <30)):
            underWeight.style.visibility = "visible";
            normalWeight.style.visibility = "hidden";
            overWeight.style.visibility = "hidden";
            dogIcon.style.color = "#f74f4f";
            break;

    //what happens if the value is between 30 and lower than 90 
        case ((valueScore >=30) && (valueScore < 90)) :
            normalWeight.style.visibility = "visible";
            overWeight.style.visibility = "hidden";
            underWeight.style.visibility = "hidden";
            dogIcon.style.color="#45b27D";
            break;
    
    //what happens if the value is over 90
        case (valueScore >=90):
            overWeight.style.visibility = "visible";
            normalWeight.style.visibility = "hidden";
            underWeight.style.visibility = "hidden";
            dogIcon.style.color = "#000000";
            break;


    //what happens if the value is equal to 0 or to an empty string
        case ((valueScore == 0) || (valueScore == "")):
            inputRange.value = 0;
            overWeight.style.visibility = "hidden";
            normalWeight.style.visibility = "hidden";
            underWeight.style.visibility = "hidden";
            dogIcon.style.color = "#589fc9";
        }
 
})

showScore.addEventListener('input', (e)=>{
 
        //what happens if the user inserts a value, that is over 120
        if(showScore.value > 120){
            warnMessage.style.visibility = 'visible';
            warnMessage.innerHTML = "Only values accepted: 0 to 120";
            showScore.style.border = "1px solid red";
            showScore.value = showScore.value/10 ^0;
        } else {
        warnMessage.style.visibility = 'hidden';
        showScore.value = e.target.value;
        inputRange.value = showScore.value;

    
    switch(true){
        case ((showScore.value >=0.01) && (showScore.value <30)):
            showScore.style.border ="1px solid #f4f5f8"
            underWeight.style.visibility = "visible";
            normalWeight.style.visibility = "hidden";
            overWeight.style.visibility = "hidden";
            dogIcon.style.color = "#f74f4f";
            break;
        
        case ((showScore.value >=30) && (showScore.value < 90)):
           showScore.style.border = "1px solid #f4f5f8";
           normalWeight.style.visibility = "visible";
           overWeight.style.visibility = "hidden";
           underWeight.style.visibility = "hidden";
           dogIcon.style.color="#45b27D";
           break;
        
        case (showScore.value >=90):
            showScore.style.border = "1px solid #f4f5f8";
            overWeight.style.visibility = "visible";
            normalWeight.style.visibility = "hidden";
            underWeight.style.visibility = "hidden";
            dogIcon.style.color = "#000000";
            break;

        case (showScore.value == ""):
           inputRange.value = "0";
           overWeight.style.visibility = "hidden";
           normalWeight.style.visibility = "hidden";
           underWeight.style.visibility = "hidden";
           dogIcon.style.color = "#589fc9";

    }
    }}
)

//prevents user from typing multiple zeros in the score value
function checkZero(){
    if(showScore.value.startsWith("0")){
        inputRange.value = "0";
        overWeight.style.visibility = "hidden";
        normalWeight.style.visibility = "hidden";
        underWeight.style.visibility = "hidden";
        dogIcon.style.color = "#589fc9";
        showScore.value = "0";
}

}