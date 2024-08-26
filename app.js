const all_units = document.querySelectorAll(".units");
const all_tabs = document.querySelectorAll(".tab_btn")


// default active
all_units[0].classList.add('active');
all_tabs[0].classList.add('active');


all_tabs.forEach((tab, index) => {

    // on tab button click
    tab.addEventListener('click', ()=>{
      
        // only one tab active at a time
        all_tabs.forEach(tab=>{
            tab.classList.remove('active');
        })

        tab.classList.add('active');

        // only one tab content is active and clear textboxes
        all_units.forEach(content=>{
          document.getElementById("inputTextbox").value = " ";
          document.getElementById("outputTextbox").value = " ";
            content.classList.remove('active');
        });
    
        all_units[index].classList.add('active');
    });
});





//todo: make a button to swap units around


let convertButton = document.getElementById("convertButton");

convertButton.addEventListener('click', ()=>{

  // updates with current information
  let currentTab = document.querySelector(".tab_btn.active").id;
  let currentFromUnit = document.querySelector(".units.active select").value;
  let currentToUnit = document.querySelector(".units.active select:last-of-type").value;
  let inputText = parseFloat(document.getElementById("inputTextbox").value);
  let outputTextbox = document.getElementById("outputTextbox");


  // conditional conversion formulas
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

if (currentTab === "volume_button"){
  let volumeInLitre = 0;
  let answerVolume = 0;
  
    switch(currentFromUnit){
  
    case "m3":
      volumeInLitre = inputText * 1000;
      break;
  
    case "ml":
      volumeInLitre = inputText / 1000;
      break;
    
    case "l":
      volumeInLitre = inputText;
      break;

    case "floz":
      volumeInLitre = inputText / 33.814;
      break;
    case "gn":
      volumeInLitre = inputText * 3.785;
      break;
  
    
    }
  
    switch(currentToUnit){
      case "m3":
      answerVolume = Math.round((volumeInLitre / 1000) * 10000000) / 10000000;
      break;
  
    case "ml":
      answerVolume = Math.round((volumeInLitre * 1000) * 100) / 100;
      break;
    
    case "l":
      answerVolume = Math.round((volumeInLitre) * 10000) / 10000;
      break;

    case "floz":
      answerVolume = Math.round((volumeInLitre * 33.814022) * 100) / 100;
      break;
    case "gn":
      answerVolume = Math.round((volumeInLitre / 3.785) * 10000000) / 10000000;
      break;
      
    }
  
    outputTextbox.value = answerVolume;
  }

if (currentTab === "weight_button"){
    let weightInKg = 0;
    let answerWeight = 0;
    
      switch(currentFromUnit){
    
      case "g":
        weightInKg = inputText / 1000;
        break;
    
      case "kg":
        weightInKg = inputText;
        break;
      
      case "lb":
        weightInKg = inputText / 2.204625;
        break;
  
      case "oz":
        weightInKg = inputText / 35.274;
        break;
      case "t":
        weightInKg = inputText * 1000;
        break;
    
      
      }
    
      switch(currentToUnit){
        case "g":
        answerWeight = Math.round((weightInKg * 1000) * 100) / 100;
        break;
    
      case "kg":
        answerWeight = Math.round((weightInKg) * 10000) / 10000;
        break;
      
      case "lb":
        answerWeight = Math.round((weightInKg * 2.204625) * 1000) / 1000;
        break;
  
      case "oz":
        answerWeight = Math.round((weightInKg * 35.274) * 100) / 100;
        break;
      case "t":
        answerWeight = Math.round((weightInKg / 1000) * 1000000) / 1000000;
        break;
        
      }
    
      outputTextbox.value = answerWeight;
    }

if (currentTab === "time_button"){
      let timeInHours = 0;
      let answerTime = 0;
      
        switch(currentFromUnit){
      
        case "s":
          timeInHours = inputText / 3600;
          break;
      
        case "min":
          timeInHours = inputText / 60;
          break;
        
        case "hour":
          timeInHours = inputText;
          break;
    
        case "day":
          timeInHours = inputText * 24;
          break;
        case "week":
          timeInHours = inputText * 168;
          break;
          case "mon":
          timeInHours = inputText * 730;
          break;
          case "year":
          timeInHours = inputText * 8760;
          break;
          case "decade":
          timeInHours = inputText * 87600;
          break;

        }
      
        switch(currentToUnit){

            case "s":
            answerTime = Math.round((timeInHours * 3600) * 10) / 10;
            break;
        
          case "min":
            answerTime = Math.round((timeInHours * 60) * 10000) / 10000;
            break;
          
          case "hour":
            answerTime = Math.round((timeInHours) * 10000) / 10000;
            break;
      
          case "day":
            answerTime = Math.round((timeInHours / 24) * 10000) / 10000;
            break;
          case "week":
            answerTime = Math.round((timeInHours / 168) * 1000000) / 1000000;
            break;
            case "mon":
            answerTime = Math.round((timeInHours / 730) * 10000000) / 10000000;
            break;
            case "year":
            answerTime = Math.round((timeInHours / 8760) * 100000000) / 100000000;
            break;
            case "decade":
            answerTime = Math.round((timeInHours / 87600) * 1000000000) / 1000000000;
            break;
          
        }
      
        outputTextbox.value = answerTime;
      }

})






  
   




