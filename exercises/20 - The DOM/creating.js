const myParagraph = document.createElement('p');
myParagraph.textContent = `I'm a P!`;
myParagraph.classList.add('spetial');
console.log(myParagraph);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');

li1.textContent = "I'm the first!";
li2.textContent = "I'm the second!";
li3.textContent = "I'm the third!";
li4.textContent = "I'm the fourth!";
li5.textContent = "I'm the fifth!";

console.log(li1, li2, li3, li4, li5);

ul.appendChild(li3);
li3.insertAdjacentElement('beforebegin', li2);
li2.insertAdjacentElement('beforebegin', li1);
li3.insertAdjacentElement('afterend', li4);
ul.appendChild(li5);
document.body.appendChild(ul);

console.log(ul);
