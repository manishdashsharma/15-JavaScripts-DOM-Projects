#### Project-06 
- Question 1 : add company logo
![image](./Output/DOM%20P3%20SS-1.png)
```javascript
var companyLogo = document.getElementsByClassName('logo')[0];
companyLogo.setAttribute('src', './assets/ineuron-logo.png');
```
- Question 2 : change the price
![image](./Output/DOM%20P3%20SS-2.png)
```javascript
var priceSpan = document.getElementsByClassName('app_price')[0].children[0];
priceSpan.innerHTML='$10'
```


