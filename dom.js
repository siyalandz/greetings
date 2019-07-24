var textElem = document.querySelector("#name");
var buttonElem = document.querySelector("#greetBtn");
var addNameElem = document.querySelector('addName')
var setNameElem = document.querySelector('setName')
var getNameElem = document.querySelector('getName')
var languageElem = document.querySelector('language')
var resetButtonElem = document.querySelector('#myButton')
var counterElem = document.querySelector('counter')



var rd1 = document.getElementById('msg'); // displaying message
var rb = document.getElementById('names');
var rc = document.getElementById('namesCounter');


let namesOfGreetedPeople = localStorage.getItem('greetNames') ? JSON.parse(localStorage.getItem('greetNames')) : {};
var greetFactoryFunction = greetFactory(namesOfGreetedPeople);
var greetingsCounter = 0;

function textBtnClicked() {
    var userName = document.querySelector(".userName"); 
    if(userName.value == "" || !isNaN(userName.value)) {
        rb.innerHTML = "please enter name"
        return false;
         }
    var lang = document.querySelector("input[name = 'myRadio']:checked");
    var language = lang.value;
    var name = userName.value

    var greetingsOfgreet = greetFactoryFunction.language(name, language);
    localStorage.setItem('greetNames', JSON.stringify(greetFactoryFunction.getNames()));
    

    bulisa(name);

    rd1.innerHTML = greetingsOfgreet;

}
var namesGreeted = {};

function bulisa(userName) {
    var MyName = name.toLowerCase();
    var userName = MyName.toUpperCase().charAt(0) + MyName.slice(1)

   
    if (namesGreeted[userName] === undefined) {
        greetingsCounter++;

        namesGreeted[userName] = 1; //number of greeted people

    } else if (namesGreeted[userName] !== undefined) {
        namesGreeted[userName] = namesGreeted[userName] + 1;
    } else (userName.value  == undefined)

    rb.innerHTML = userName + " have been greeted " + namesGreeted[userName] + " time(s)";
    rc.innerHTML = greetingsCounter // namesGreeted[userName];
}

function myReset() {
    localStorage.clear();
    window.location.reload();
}


buttonElem.addEventListener('click', textBtnClicked)
resetButtonElem.addEventListener('click', myReset)