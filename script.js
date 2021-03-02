const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 600;

// global variables
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];

// game board
const controlBar = {
  width: canvas.width,
  height: cellSize,
}

// projectiles

// defenders

// enemies

// resources

// utilities
function animate() {
  ctx.fillStyle = 'blue';
  fillRect(0, 0, controlBar.width, controlBar.height);
  requestAnimationFrame(animate);
}
animate();