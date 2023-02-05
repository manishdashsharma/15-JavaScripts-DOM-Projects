// Question1 - add another div and add make it scrollable
var asideBar = document.querySelector('.new');

var hrLine = document.createElement('hr');
var headLine = document.createElement('h2');
var paragraph = document.createElement('p');

hrLine.setAttribute('class', 'hr-line');
headLine.setAttribute('class', 'new-head');
paragraph.setAttribute('class', 'new-p');

headLine.textContent= 'this heading is created by me';
paragraph.textContent= 'this paragraph is created by me and i have done using javascript';

asideBar.appendChild(hrLine);
asideBar.appendChild(headLine);
asideBar.appendChild(paragraph);

asideBar.style.overflowY = 'scroll';
asideBar.style.overflowX = "hidden";

// Question2 - remove the background image

document.body.style.backgroundImage="none";

// Question3 - hamburger button

const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".navbar-brand");
const button = document.querySelector(".navbar-toggler");
const navList = document.querySelector("#navbarTogglerDemo01");
const div  = document.createElement("div");

div.appendChild(button);
div.appendChild(navList);

navbar.appendChild(div);

button.addEventListener("click",() => {
    if (navList.classList.contains("collapse")) {
        logo.style.position = "relative";
        logo.style.bottom = "87px";

        button.style.width = "max-content";
        button.style.marginLeft = "50px";
        button.style.marginBottom = "20px";
        
        navList.classList.remove("collapse");
    } else {
        navList.classList.add("collapse");
        logo.style.position = "static";
    }
});