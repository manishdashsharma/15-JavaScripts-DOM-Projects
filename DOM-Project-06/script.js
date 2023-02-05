// Question 1 : add company logo

var companyLogo = document.getElementsByClassName('logo')[0];
companyLogo.setAttribute('src', './assets/ineuron-logo.png');

// Question 2 : change the price

var priceSpan = document.getElementsByClassName('app_price')[0].children[0];
priceSpan.innerHTML='$10'