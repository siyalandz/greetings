var textElem = document.querySelector("#name");
var buttonElem = document.querySelector("#greetBtn");
var addNameElem = document.querySelector('addName')
var setNameElem = document.querySelector('setName')
var getNameElem = document.querySelector('getName')
var languageElem = document.querySelector('language')

var rd1 = document.getElementById('msg'); // displaying message
var rb = document.getElementById('names');
var rc = document.getElementById('namesCounter');
var greetFactoryFunction = greetFactory();
var greetingsCounter = 0;
function textBtnClicked() {
    var userName = document.querySelector(".userName"); //get user input text value
    var name = userName.value; 
    var lang  = document.querySelector("input[name = 'myRadio']:checked");
    var language = lang.value;
   
    var greetingsOfgreet = greetFactoryFunction.language(name, language);
bulisa(name);

    rd1.innerHTML =greetingsOfgreet;
    
}
var namesGreeted = {};

function bulisa(userName){

if (namesGreeted[userName] === undefined){
    greetingsCounter++;
    
    namesGreeted[userName] = 1;
    
} else if(namesGreeted[userName] !== undefined){
    namesGreeted[userName] = namesGreeted[userName] + 1;
}

// console.log(namesGreeted);


rb.innerHTML = userName + " have been greeted " + namesGreeted[userName] + " time(s)";
rc.innerHTML = greetingsCounter // namesGreeted[userName];
}

buttonElem.addEventListener('click',textBtnClicked )











