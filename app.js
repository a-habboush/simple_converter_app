const all_units = document.querySelectorAll(".units");
const all_tabs = document.querySelectorAll(".tab_btn")


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

  let currentTab = document.querySelector(".tab_btn.active").id;
  let currentFromUnit = document.querySelector(".units.active select").value;
  let currentToUnit = document.querySelector(".units.active select:last-of-type").value;
  let inputText = parseFloat(document.getElementById("inputTextbox").value);
  let outputTextbox = document.getElementById("outputTextbox");


if (currentTab === "length_button"){
  let lengthInMeters;
  let answerLength;
  
  switch(currentFromUnit) {
    case "km":
        lengthInMeters = inputText * 1000;  
      break;

    case "m":
      lengthInMeters = inputText;  
      break;

    case "cm":
    lengthInMeters = inputText / 100;
    break;

    case "mi":
    lengthInMeters = inputText * 1609.343;
    break;

    case "ya":
    lengthInMeters = inputText / 1.09368;
    break;

    case "in":
    lengthInMeters = inputText * 0.0254;
    break;

    case "ft":
    lengthInMeters = inputText / 3.281;
    break;

    default:
        lengthInMeters = 0;
  } 

  switch(currentToUnit){
    
    case "km":
        answerLength = Math.round((lengthInMeters / 1000) * 100000) / 100000;  
      break;

    case "m":
      answerLength = Math.round((lengthInMeters) * 1000) / 1000;  
      break;

    case "cm":
    answerLength = Math.round((lengthInMeters * 100) * 100 ) / 100;
    break;

    case "mi":
    answerLength = Math.round((lengthInMeters / 1609.343) * 100000000) / 100000000;
    break;

    case "ya":
    answerLength =  Math.round((lengthInMeters * 1.093614) * 1000) / 1000;
    break;

    case "in":
        answerLength = Math.round((lengthInMeters * 39.3701) * 10 ) / 10 ;
    break;

    case "ft":
    answerLength = Math.round((lengthInMeters * 3.281) * 10000) / 10000;
    break;

  }

outputTextbox.value = answerLength;
}

if (currentTab === "temp_button"){
let tempInK = 0;
let answerTemp = 0;

  switch(currentFromUnit){

  case "c":
    tempInK = (inputText + 273.15);
    break;

  case "f":
    tempInK = ((inputText - 32) * (5/9)) + 273.15;
    break;

  case "k":
    tempInK = inputText;
    break;
  }

  switch(currentToUnit){
    case "c":
    answerTemp = Math.round((tempInK - 273.15) * 1000) / 1000;
    break;

  case "f":
    answerTemp = Math.round(((tempInK - 273.15) * (9/5) + 32) * 1000) / 1000;
    break;

  case "k":
    answerTemp = Math.round((tempInK) * 1000) / 1000;
    break;
  }

  outputTextbox.value = answerTemp;
}

if (currentTab === "area_button"){
  let areaInSqm = 0;
  let answerArea = 0;
  
    switch(currentFromUnit){
  
    case "sqm":
      areaInSqm = inputText;
      break;
  
    case "sqkm":
      areaInSqm = inputText * 1000000;
      break;
    
    case "acre":
      areaInSqm = inputText * 4046.86;
      break;

    case "sqft":
      areaInSqm = inputText / 10.764;
      break;
    case "sqy":
      areaInSqm = inputText / 1.196;
      break;
    case "sqmi":
      areaInSqm = inputText * 2589988.11;
      break;
    
    }
  
    switch(currentToUnit){
      case "sqm":
        answerArea = Math.round((areaInSqm) * 1000) / 1000;
        break;
    
      case "sqkm":
        answerArea = Math.round((areaInSqm / 1000000) * 10000000) / 10000000;
        break;
      
      case "acre":
        answerArea = Math.round((areaInSqm / 4046.86) * 1000000) / 1000000;
        break;
  
      case "sqft":
        answerArea = Math.round((areaInSqm * 10.764) * 100) / 100;
        break;
      case "sqy":
        answerArea = Math.round((areaInSqm * 1.196) * 1000) / 1000;
        break;
      case "sqmi":
        answerArea = Math.round((areaInSqm / 2589988.11) * 1000000000) / 1000000000;
        break;
      
    }
  
    outputTextbox.value = answerArea;
  }

})






  
   




