var textElem = document.querySelector("#name");
var buttonElem = document.querySelector("#greetBtn");
var addNameElem = document.querySelector('addName')
var setNameElem = document.querySelector('setName')
var getNameElem = document.querySelector('getName')
var languageElem = document.querySelector('language')

var msg = document.getElementById('msg'); // displaying message


function textBtnClicked() {
    var userName = document.querySelector(".userName"); //get user input text value
    var l = document.querySelector("input[name='username']:checked");

    msg.innerHTML = "Hallo, " + userName.value + "!"
    msg.innerHTML = "Hello, " + userName.value + "!" // displaye greeting message
    msg.innerHTML = "molo, " + userName.value + "!" 
   
    // if (lang.value === "Hello, userName.value") {
    //     return 'Hello + name';
    // } else if (lang.value === "molo, useName.value ") {
    //     return 'molo + name';
    // }
}


buttonElem.addEventListener('click',textBtnClicked )











