// Question 1 : add company logo

var companyLogo = document.getElementsByClassName('logo')[0];
companyLogo.setAttribute('src', './assets/ineuron-logo.png');

// Question 2 : change the price and social media

var priceSpan = document.getElementsByClassName('app_price')[0].children[0];
priceSpan.innerHTML='$10'


// social media
var footer_social = document.querySelector(".footer_social");

var footer_social_ico = document.createElement("div");
footer_social.appendChild(footer_social_ico);
footer_social_ico.setAttribute('class','footer_social_ico');
footer_social_ico.innerHTML='<i class="fa-brands fa-linkedin"></i>';
