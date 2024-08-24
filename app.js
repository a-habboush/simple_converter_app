const all_units = document.querySelectorAll(".units");
const all_tabs = document.querySelectorAll(".tabs button")


// default
all_units[0].classList.add('active');
all_tabs[0].classList.add('active');


all_tabs.forEach((tab, index) => {

    // on click
    tab.addEventListener('click', ()=>{

        // only one tab active at a time
        all_tabs.forEach(tab=>{
            tab.classList.remove('active');
        })

        tab.classList.add('active');

        // only one tab content is active
        all_units.forEach(content=>{
            content.classList.remove('active');
        });
    
        all_units[index].classList.add('active');
    });
});




let convertButton = document.getElementById("convertButton");

convertButton.addEventListener('click', ()=>{


let inputLength = document.getElementById("from_length").value;
let outputLength = document.getElementById("to_length");
let fromUnitLength = document.getElementById("from_units_length").value;
let toUnitLength = document.getElementById("to_units_length").value;
let lengthInMeters;
let answerLength;


switch(fromUnitLength) {
    case "km":
        lengthInMeters = inputLength * 1000;  
      break;

    case "m":
      lengthInMeters = inputLength;  
      break;

    case "cm":
    lengthInMeters = inputLength / 100;
    break;

    case "mi":
    lengthInMeters = inputLength * 1609.343;
    break;

    case "ya":
    lengthInMeters = inputLength / 1.09368;
    break;

    case "in":
    lengthInMeters = inputLength * 0.0254;
    break;

    case "ft":
    lengthInMeters = inputLength / 3.281;
    break;

    default:
        lengthInMeters = 0;
  } 

  switch(toUnitLength){
    
    case "km":
        answerLength = lengthInMeters / 1000;  
      break;

    case "m":
      answerLength = lengthInMeters;  
      break;

    case "cm":
    answerLength = lengthInMeters * 100;
    break;

    case "mi":
    answerLength = Math.round((lengthInMeters / 1609.343) * 100000000) / 100000000;
    break;

    case "ya":
    answerLength =  Math.round((lengthInMeters * 1.094) * 100000) / 100000;
    break;

    case "in":
        answerLength = Math.round((lengthInMeters * 39.3701) * 10 ) / 10 ;
    break;

    case "ft":
    answerLength = Math.round((lengthInMeters * 3.281) * 10000) / 10000;
    break;

  }

outputLength.value = answerLength;


})






  
   




