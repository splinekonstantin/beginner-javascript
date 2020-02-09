// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;
// Setup our canvas for drowing
// Make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;
let x = Math.floor(width * Math.random());
let y = Math.floor(height * Math.random());

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// Write a draw function
function draw({ key }) {
  // incrementing hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;

  console.log(key);
  //   start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  //   move our x and y values depending on what user did

  //   if (key.includes('Up')) {
  //     y -= MOVE_AMOUNT;
  //   } else if (key.includes('Down')) {
  //     y += MOVE_AMOUNT;
  //   } else if (key.includes('Right')) {
  //     x += MOVE_AMOUNT;
  //   } else x -= MOVE_AMOUNT;
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// Clear/shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}
// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
