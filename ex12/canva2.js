let boatX = 380;
let boatDirection = 1;
let duckX = 500;
let duckDirection = 1;
let sunAngle = 0;

function drawScene() {
  let canvas = document.getElementById("pondCanvas");
  let ctx = canvas.getContext("2d");
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw background (sky)
  ctx.fillStyle = "#87CEEB"; // Sky blue
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw grass
  ctx.fillStyle = "#7CFC00"; // Lawn green
  ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height/2);
  
  // Draw sun with rays
  drawSun(ctx, 700, 80);
  
  // Draw pond
  drawPond(ctx, 400, 300);
  
  // Draw house
  drawHouse(ctx, 100, 250);
  
  // Draw flower
  drawFlower(ctx, 650, 350);
  
  // Draw duck
  drawDuck(ctx, duckX, 350);
  
  // Draw stones
  drawStones(ctx);
  
  // Animate elements
  animateElements();
}

function drawSun(ctx, x, y) {
  // Sun circle
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFD700"; // Golden yellow
  ctx.fill();
  ctx.strokeStyle = "#FFA500"; // Orange border
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Sun rays
  ctx.save();
  ctx.strokeStyle = "#FFD700";
  ctx.lineWidth = 3;
  for (let i = 0; i < 12; i++) {
    const angle = sunAngle + (i * Math.PI) / 6;
    const x1 = x + Math.cos(angle) * 50;
    const y1 = y + Math.sin(angle) * 50;
    const x2 = x + Math.cos(angle) * 65;
    const y2 = y + Math.sin(angle) * 65;
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawPond(ctx, x, y) {
  // Create a gradient for the water
  const gradient = ctx.createRadialGradient(x, y, 10, x, y, 150);
  gradient.addColorStop(0, "#66CCFF");
  gradient.addColorStop(1, "#3399CC");
  
  // Pond water
  ctx.beginPath();
  ctx.ellipse(x, y, 150, 70, 0, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = "#3399CC"; 
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Small boat
  ctx.beginPath();
  ctx.moveTo(boatX, 280);
  ctx.lineTo(boatX + 40, 280);
  ctx.lineTo(boatX + 30, 290);
  ctx.lineTo(boatX + 10, 290);
  ctx.closePath();
  ctx.fillStyle = "#8B4513"; // Brown
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Boat mast
  ctx.beginPath();
  ctx.moveTo(boatX + 20, 280);
  ctx.lineTo(boatX + 20, 260);
  ctx.strokeStyle = "#8B4513";
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Boat sail
  ctx.beginPath();
  ctx.moveTo(boatX + 20, 260);
  ctx.lineTo(boatX + 35, 270);
  ctx.lineTo(boatX + 20, 280);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
}

function drawHouse(ctx, x, y) {
  // House base
  ctx.fillStyle = "#FFA07A"; // Light salmon
  ctx.fillRect(x, y, 100, 100);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, 100, 100);
  
  // Roof
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y - 50);
  ctx.lineTo(x + 100, y);
  ctx.closePath();
  ctx.fillStyle = "#CD5C5C"; // Indian red
  ctx.fill();
  ctx.stroke();
  
  // Windows
  ctx.fillStyle = "#87CEFA"; // Light sky blue
  
  // Left window
  ctx.fillRect(x + 15, y + 20, 20, 20);
  ctx.strokeRect(x + 15, y + 20, 20, 20);
  
  // Window cross
  ctx.beginPath();
  ctx.moveTo(x + 15, y + 30);
  ctx.lineTo(x + 35, y + 30);
  ctx.moveTo(x + 25, y + 20);
  ctx.lineTo(x + 25, y + 40);
  ctx.stroke();
  
  // Right window
  ctx.fillRect(x + 65, y + 20, 20, 20);
  ctx.strokeRect(x + 65, y + 20, 20, 20);
  
  // Window cross
  ctx.beginPath();
  ctx.moveTo(x + 65, y + 30);
  ctx.lineTo(x + 85, y + 30);
  ctx.moveTo(x + 75, y + 20);
  ctx.lineTo(x + 75, y + 40);
  ctx.stroke();
  
  // Door
  ctx.fillStyle = "#8B4513"; // Saddle brown
  ctx.fillRect(x + 40, y + 50, 20, 50);
  ctx.strokeRect(x + 40, y + 50, 20, 50);
  
  // Doorknob
  ctx.beginPath();
  ctx.arc(x + 55, y + 75, 3, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFD700"; // Gold
  ctx.fill();
}

function drawFlower(ctx, x, y) {
  // Stem
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 50);
  ctx.strokeStyle = "#228B22"; // Forest green
  ctx.lineWidth = 4;
  ctx.stroke();
  
  // Leaves
  ctx.beginPath();
  ctx.arc(x - 10, y + 25, 10, 0, Math.PI, true);
  ctx.fillStyle = "#228B22"; // Forest green
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(x + 10, y + 15, 10, 0, Math.PI, true);
  ctx.fillStyle = "#228B22"; // Forest green
  ctx.fill();
  
  // Petals
  ctx.fillStyle = "#FF69B4"; // Hot pink
  
  // Top, right, bottom, left petals
  const positions = [
    {dx: 0, dy: -20},
    {dx: 20, dy: 0},
    {dx: 0, dy: 20},
    {dx: -20, dy: 0}
  ];
  
  positions.forEach(pos => {
    ctx.beginPath();
    ctx.arc(x + pos.dx, y + pos.dy, 20, 0, 2 * Math.PI);
    ctx.fill();
  });
  
  // Flower center
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFF00"; // Yellow
  ctx.fill();
  ctx.strokeStyle = "#FFA500";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawDuck(ctx, x, y) {
  // Duck body
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFF00"; // Yellow
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Duck head
  ctx.beginPath();
  ctx.arc(x + 20, y - 10, 12, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFF00"; // Yellow
  ctx.fill();
  ctx.stroke();
  
  // Duck eye
  ctx.beginPath();
  ctx.arc(x + 25, y - 15, 3, 0, 2 * Math.PI);
  ctx.fillStyle = "#000"; // Black
  ctx.fill();
  
  // Duck beak
  ctx.beginPath();
  ctx.moveTo(x + 30, y - 10);
  ctx.lineTo(x + 40, y - 5);
  ctx.lineTo(x + 30, y);
  ctx.closePath();
  ctx.fillStyle = "#FFA500"; // Orange
  ctx.fill();
  ctx.stroke();
  
  // Duck wing
  ctx.beginPath();
  ctx.arc(x - 5, y - 5, 10, 0, Math.PI, false);
  ctx.fillStyle = "#FFD700"; // Darker yellow
  ctx.fill();
  ctx.stroke();
}

function drawStones(ctx) {
  const stonePositions = [
    { x: 120, y: 380, r: 15 },
    { x: 135, y: 390, r: 10 },
    { x: 110, y: 390, r: 8 },
    { x: 550, y: 380, r: 15 },
    { x: 565, y: 390, r: 10 },
    { x: 540, y: 390, r: 8 }
  ];
  
  stonePositions.forEach(stone => {
    // Create a gradient for the stones
    const gradient = ctx.createRadialGradient(
      stone.x - 3, stone.y - 3, 0,
      stone.x, stone.y, stone.r
    );
    gradient.addColorStop(0, "#A9A9A9"); // Lighter gray
    gradient.addColorStop(1, "#696969"); // Darker gray
    
    ctx.beginPath();
    ctx.arc(stone.x, stone.y, stone.r, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.strokeStyle = "#555555";
    ctx.lineWidth = 1;
    ctx.stroke();
  });
}

function animateElements() {
  // Animate boat
  boatX += boatDirection * 1.5;
  if (boatX > 450 || boatX < 350) {
    boatDirection *= -1;
  }
  
  // Animate duck
  duckX += duckDirection;
  if (duckX > 570 || duckX < 430) {
    duckDirection *= -1;
  }
  
  // Rotate sun rays
  sunAngle += 0.01;
  
  // Continue animation
  requestAnimationFrame(drawScene);
}

window.onload = drawScene;
