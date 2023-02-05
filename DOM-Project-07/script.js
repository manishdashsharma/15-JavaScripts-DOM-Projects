// Question 1
var languageOffered = document.getElementsByClassName('main__languages')[0];
var aTags = languageOffered.getElementsByTagName('a');

for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent.includes('2.0')) {
    languageOffered.removeChild(aTags[i]);
}
}

// Question 2
var input = document.querySelector(".main__form-input");

input.removeAttribute("disabled");
input.setAttribute("placeholder","iNeuron");

var submit = document.querySelector(".main__form-btn");
submit.removeAttribute("disabled");

document.addEventListener("load",()=>{

});