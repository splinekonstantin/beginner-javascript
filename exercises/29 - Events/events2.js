const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('Clicked!!!');
}

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

// Listen to multiple items
// const buyButtons = document.querySelectorAll('button.buy');
// console.log(buyButtons);

// function buyItem() {
//   console.log('BUYING ITEM');
// }

// buyButtons.forEach(function(buyButton) {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// });

// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('It clicked');
//   });
// });

// Events - targets, bubbling, propagation and capture
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyClick(event) {
  console.log('You bought it!!!');
  console.log(parseFloat(event.target.dataset.price));
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyClick);
});

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', e => {
  console.log(this);
  console.log(e.target);
  console.log(e.currentTarget);
});
