const inputRange = document.querySelector('#inputrange');
let showScore = document.querySelector('#show-score');
const normalWeight = document.querySelector('.normal');
const underWeight = document.querySelector('.underweight');
const overWeight = document.querySelector('.overweight');
const dogIcon = document.querySelector('.fa-paw');
showScore.innerHTML = 0;
let scoreContainer = document.querySelector('.score-container');
const warnMessage = document.querySelector('.warning-message');

 
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
       dogIcon.style.color = "#f74f4f";

       //what happens if the value is between 30 and 90
   } else if(valueScore >=30 && valueScore < 90){
       normalWeight.style.visibility = "visible";
       overWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       dogIcon.style.color="#45b27D";

       //what happens if the value is equal or over 90
   } else if(valueScore >=90){
       overWeight.style.visibility = "visible";
       normalWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       dogIcon.style.color = "#000000";
       
   } else if(valueScore == 0 || valueScore ==""){

       //what happens if the value is equal to 0 (kind of reset function)
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
   if(valueScore >=0.01 && valueScore <30){
       underWeight.style.visibility = "visible";
       normalWeight.style.visibility = "hidden";
       overWeight.style.visibility = "hidden";
       dogIcon.style.color = "#f74f4f";

       //what happens if the value is between 30 and 90
   } else if(valueScore >=30 && valueScore < 90){
       normalWeight.style.visibility = "visible";
       overWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       dogIcon.style.color="#45b27D";

       //what happens if the value is equal or over 90
   } else if(valueScore >=90){
       overWeight.style.visibility = "visible";
       normalWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       dogIcon.style.color = "#000000";
       
   } else if (valueScore == 0 || valueScore == ""){

       //what happens if the value is equal to 0 (kind of reset function)
       inputRange.value = 0;
       overWeight.style.visibility = "hidden";
       normalWeight.style.visibility = "hidden";
       underWeight.style.visibility = "hidden";
       dogIcon.style.color = "#589fc9";

   }
})







showScore.value= 0;

showScore.addEventListener('input', (e)=>{
        

        if(showScore.value > 120){
            warnMessage.style.visibility = 'visible';
            warnMessage.innerHTML = "Only values accepted: 0 to 120";
            showScore.style.border = "1px solid red";
            showScore.value = showScore.value/10 ^0;
        }else {
        warnMessage.style.visibility = 'hidden';
        showScore.value = e.target.value;
        inputRange.value = showScore.value;

        //what happens if the value is below 30
       if(showScore.value >=0.01 && showScore.value <30){
        showScore.style.border = "1px solid #f9f9f9";
           underWeight.style.visibility = "visible";
           normalWeight.style.visibility = "hidden";
           overWeight.style.visibility = "hidden";
           dogIcon.style.color = "#f74f4f";
   
           //what happens if the value is between 30 and 90
       } else if(showScore.value >=30 && showScore.value < 90){
        showScore.style.border = "1px solid #f9f9f9";
           normalWeight.style.visibility = "visible";
           overWeight.style.visibility = "hidden";
           underWeight.style.visibility = "hidden";
           dogIcon.style.color="#45b27D";
   
           //what happens if the value is equal or over 90
       } else if(showScore.value >=90){
        showScore.style.border = "1px solid #f9f9f9";
           overWeight.style.visibility = "visible";
           normalWeight.style.visibility = "hidden";
           underWeight.style.visibility = "hidden";
           dogIcon.style.color = "#000000";
           
       } else if(showScore.value == 0 || showScore.value == ""){
   
           //what happens if the value is equal to 0 (kind of reset function)
           inputRange.value = "0";

            overWeight.style.visibility = "hidden";
           normalWeight.style.visibility = "hidden";
           underWeight.style.visibility = "hidden";
           dogIcon.style.color = "#589fc9";
       }
    }}
)