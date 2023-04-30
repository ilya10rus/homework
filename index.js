import "./index.css";
import JS_IMAGE from './assets/JavaScript.png';

console.log('Hello World!!');
const title = document.createElement('h1');
title.textContent = 'I love JavaScript';
const image = document.createElement('img');
image.className = 'js-image';
image.src = JS_IMAGE;
document.body.append(title);
document.body.append(image);
