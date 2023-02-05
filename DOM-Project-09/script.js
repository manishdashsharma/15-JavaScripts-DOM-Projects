// Question1 - Chnage the heading color
var pageHeading = document.querySelector('.caption .title');
pageHeading.style.color = 'red';

// change the button colorafter clicking
var button = document.querySelector('.add-to-cart');
console.log(button.style.backgroundColor)

button.addEventListener('click', function() {
  button.style.backgroundColor ='#D61355';
});
