'use strict';
console.log('Here\'s a hiddem message');

let today = new Date();
let formatDate = today.toDateString();
let SelectElement = document.getElementById('date');
SelectElement.innerHTML = formatDate;