var textElem = document.querySelector("#name");
var buttonElem = document.querySelector("#greetBtn");
var addNameElem = document.querySelector('addName')
var setNameElem = document.querySelector('setName')
var getNameElem = document.querySelector('getName')
var languageElem = document.querySelector('language')

var rd1 = document.getElementById('msg'); // displaying message

var greetFactoryFunction = greetFactory();

function textBtnClicked() {
    var userName = document.querySelector(".userName"); //get user input text value
    var name = userName.value; 
    var lang  = document.querySelector("input[name = 'myRadio']:checked");
    var language = lang.value;
   //  msg.innerHTML = "Hallo, " + userName.value + "!"
    // msg.innerHTML = "Hello, " + userName.value + "!" // displaye greeting message
    var greetingsOfexample = greetFactoryFunction.language(name, language);

    rd1.innerHTML =greetingsOfexample;
 //   console.log(rd1.innerHTML =greetingsOfexample);
     // msg.innerHTML = "molo, " + userName.value + "!" 
   
    // if (lang.value === "Hello, userName.value") {
    //     return 'Hello + name';
    // } else if (lang.value === "molo, useName.value ") {
    //     return 'molo + name';
    // }
}


buttonElem.addEventListener('click',textBtnClicked )











