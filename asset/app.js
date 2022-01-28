//Variables

let inputRange = document.querySelector('#inputrange');
let showScore = document.querySelector('#show-score');
let normalWeight = document.querySelector('.normal');
let underWeight = document.querySelector('.underweight');
let overWeight = document.querySelector('.overweight');
let dogIcon = document.querySelector('.fa-paw');
let scoreContainer = document.querySelector('.score-container');
let warnMessage = document.querySelector('.warning-message');
let fatDog = document.querySelector('#overweight-dog');
let regularDog = document.querySelector('#regular-dog');
let underweightDog = document.querySelector('#underweight-dog');

showScore.value= 0; 
//function triggers when the user moves the range bar on the smartphone

inputRange.addEventListener('touchmove', (e)=>{
    let valueScore = e.target.value;

    //showing the value on the screen
    showScore.value = valueScore;

    //what happens if the value is below 30
   if(valueScore >=0.01 && valueScore <30){
       underWeight.style.visibility = "visible";
       normalWeight.style.visibility = "hidden";
       overWeight.style.visibility = "hidden";
       fatDog.style.visibility = 'hidden';
       regularDog.style.visibility = 'hidden';
       underweightDog.style.visibility = 'visible';

       //what happens if the value is between 30 and 90
   } else if(valueScore >=30 && valueScore < 90){
       normalWeight.style.visibility = "visible";
       overWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       fatDog.style.visibility = 'hidden';
       regularDog.style.visibility = 'visible';
       underweightDog.style.visibility = 'hidden';

       //what happens if the value is equal or over 90
   } else if(valueScore >=90){
       overWeight.style.visibility = "visible";
       normalWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       fatDog.style.visibility = 'visible';
       regularDog.style.visibility = 'hidden';
       underweightDog.style.visibility = 'hidden';
       
   } else if (valueScore == 0){

       //what happens if the value is equal to 0 (kind of reset function)
       overWeight.style.visibility = "hidden";
       normalWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       fatDog.style.visibility = 'hidden';
       regularDog.style.visibility = 'hidden';
       underweightDog.style.visibility = 'hidden';
   }
})

// function triggers when the user moves the range bar with the mouse
inputRange.addEventListener('mousemove', (e)=>{

    let valueScore = e.target.value;

    //showing the value on the screen
    showScore.value = valueScore;

    //what happens if the value is below 30
   if(valueScore >=0.01 && valueScore <30){
       underWeight.style.visibility = "visible";
       normalWeight.style.visibility = "hidden";
       overWeight.style.visibility = "hidden";
       fatDog.style.visibility = 'hidden';
       regularDog.style.visibility = 'hidden';
       underweightDog.style.visibility = 'visible';

       //what happens if the value is between 30 and 90
   } else if(valueScore >=30 && valueScore < 90){
       normalWeight.style.visibility = "visible";
       overWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       fatDog.style.visibility = 'hidden';
       regularDog.style.visibility = 'visible';
       underweightDog.style.visibility = 'hidden';

       //what happens if the value is equal or over 90
   } else if(valueScore >=90){
       overWeight.style.visibility = "visible";
       normalWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
 
       fatDog.style.visibility = 'visible';
       regularDog.style.visibility = 'hidden';
       underweightDog.style.visibility = 'hidden';
       
   } else if (valueScore == 0){

       //what happens if the value is equal to 0 (kind of reset function)
       showScore.value = 0;
       overWeight.style.visibility = "hidden";
       normalWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       fatDog.style.visibility = 'hidden';
       regularDog.style.visibility = 'hidden';
       underweightDog.style.visibility = 'hidden';
   }
})









showScore.addEventListener('input', (e)=>{
        

        if(showScore.value > 120){
            warnMessage.style.visibility = 'visible';
            warnMessage.innerHTML = "Values accepted: 0 to 120";
            showScore.style.border = "2px solid red";
            showScore.value = showScore.value/10 ^0;
        }else {
            warnMessage.style.visibility = 'hidden';
        showScore.value = e.target.value;
        inputRange.value = showScore.value;

        //what happens if the value is below 30
       if(showScore.value >=0.01 && showScore.value <30){
        showScore.style.border = "1px solid transparent";
           underWeight.style.visibility = "visible";
           normalWeight.style.visibility = "hidden";
           overWeight.style.visibility = "hidden";
           fatDog.style.visibility = 'hidden';
           regularDog.style.visibility = 'hidden';
           underweightDog.style.visibility = 'visible';
   
           //what happens if the value is between 30 and 90
       } else if(showScore.value >=30 && showScore.value < 90){
        showScore.style.border = "1px solid transparent";
           normalWeight.style.visibility = "visible";
           overWeight.style.visibility = "hidden";
           underWeight.style.visibility = "hidden";
           fatDog.style.visibility = 'hidden';
           regularDog.style.visibility = 'visible';
           underweightDog.style.visibility = 'hidden';
   
           //what happens if the value is equal or over 90
       } else if(showScore.value >=90){
        showScore.style.border = "1px solid transparent";
           overWeight.style.visibility = "visible";
           normalWeight.style.visibility = "hidden";
           underWeight.style.visibility = "hidden";
           fatDog.style.visibility = 'visible';
           regularDog.style.visibility = 'hidden';
           underweightDog.style.visibility = 'hidden';
           
       } else if (showScore.value == ""){
   
           //what happens if the value is equal to 0 (kind of reset function)
           valueScore = 0;
           showScore.value = 0;
           overWeight.style.visibility = "hidden";
           normalWeight.style.visibility = "hidden";
           underWeight.style.visibility = "hidden";
           fatDog.style.visibility = 'hidden';
           regularDog.style.visibility = 'hidden';
           underweightDog.style.visibility = 'hidden';
       }
    }}
)