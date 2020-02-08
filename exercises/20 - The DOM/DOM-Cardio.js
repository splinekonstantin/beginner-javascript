// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const myUl = document.createElement('ul');
// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li1.textContent = 'one';
myUl.appendChild(li1);
li2.textContent = 'two';
myUl.appendChild(li2);
li3.textContent = 'three';
myUl.appendChild(li3);
// put that list into the above wrapper
myDiv.appendChild(myUl);
// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src = 'https://picsum.photos/200';
// set the width to 250
myImg.width = 400;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Pup';
// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="pDiv">
        <p>I'm a paragraph 1</p>
        <p>I'm a paragraph 2</p>
    </div>
`;
// put this div before the unordered list from above
myUl.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const pDiv = myDiv.querySelector('.pDiv');
pDiv.children[1].classList.add('warning');
// remove the first paragraph
pDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const playerCard = document.createElement('div');
  playerCard.classList.add('playerCard');
  const cardHTML = `
        <h2>${name} — ${age}y.o.</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button>&times;Remove</button>
    `;
  playerCard.innerHTML = cardHTML;
  return playerCard;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const myDiv2 = document.createElement('div');
myDiv2.classList.add('cards');
// Have that function make 4 cards
// append those cards to the div
myDiv2.appendChild(generatePlayerCard('chris', 31, 185));
myDiv2.appendChild(generatePlayerCard('Daria', 31, 165));
myDiv2.appendChild(generatePlayerCard('Fatima', 5, 87));
myDiv2.appendChild(generatePlayerCard('Fedot', 4, 172));
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', myDiv2);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

const cards = document.querySelectorAll('.playerCard');

// for (let i = 0; i < cards.length; i++) {
//   //   debugger;
//   const btn = document.createElement('button');
//   btn.textContent = 'Remove';
//   cards[i].append(btn);
// }

// select all the buttons!
const buttons = document.querySelectorAll('button');
console.log(buttons);
// make out delete function
function deleteCard() {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
