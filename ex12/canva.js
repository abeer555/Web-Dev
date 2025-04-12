/**
 * Draw a scene with a pond, house, sun, flower, duck, and stones
 */
function drawScene() {
  const canvas = document.getElementById("pondCanvas");
  const ctx = canvas.getContext("2d");
  
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
  drawDuck(ctx, 500, 350);
  
  // Draw stones
  drawStones(ctx);
}

function drawSun(ctx, x, y) {
  // Sun circle
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFD700"; // Golden yellow
  ctx.fill();
  
  // Sun rays
  ctx.save();
  ctx.strokeStyle = "#FFD700";
  ctx.lineWidth = 3;
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI) / 6;
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
  // Pond water
  ctx.beginPath();
  ctx.ellipse(x, y, 150, 70, 0, 0, 2 * Math.PI);
  ctx.fillStyle = "#66CCFF"; // Light blue
  ctx.fill();
  ctx.strokeStyle = "#3399CC"; // Darker blue for border
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Small boat
  ctx.beginPath();
  ctx.moveTo(x-20, y-20);
  ctx.lineTo(x+20, y-20);
  ctx.lineTo(x+10, y-10);
  ctx.lineTo(x-10, y-10);
  ctx.closePath();
  ctx.fillStyle = "#8B4513"; // Brown
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
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
  ctx.lineTo(x+50, y-50);
  ctx.lineTo(x+100, y);
  ctx.closePath();
  ctx.fillStyle = "#CD5C5C"; // Indian red
  ctx.fill();
  ctx.stroke();
  
  // Window
  ctx.fillStyle = "#87CEFA"; // Light sky blue
  ctx.fillRect(x+15, y+20, 20, 20);
  ctx.strokeRect(x+15, y+20, 20, 20);
  
  // Window cross
  ctx.beginPath();
  ctx.moveTo(x+15, y+30);
  ctx.lineTo(x+35, y+30);
  ctx.moveTo(x+25, y+20);
  ctx.lineTo(x+25, y+40);
  ctx.stroke();
  
  // Door
  ctx.fillStyle = "#8B4513"; // Saddle brown
  ctx.fillRect(x+45, y+30, 20, 70);
  ctx.strokeRect(x+45, y+30, 20, 70);
  
  // Doorknob
  ctx.beginPath();
  ctx.arc(x+58, y+65, 3, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFD700"; // Gold
  ctx.fill();
}

function drawFlower(ctx, x, y) {
  // Stem
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y+50);
  ctx.strokeStyle = "#228B22"; // Forest green
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Leaves
  ctx.beginPath();
  ctx.arc(x-10, y+25, 10, 0, Math.PI, true);
  ctx.arc(x+10, y+15, 10, 0, Math.PI, true);
  ctx.fillStyle = "#228B22"; // Forest green
  ctx.fill();
  
  // Petals
  ctx.fillStyle = "#FF69B4"; // Hot pink
  const petalPositions = [
    {dx: 0, dy: -20},  // top
    {dx: 20, dy: 0},   // right
    {dx: -20, dy: 0},  // left
    {dx: 0, dy: 20}    // bottom
  ];
  
  petalPositions.forEach(pos => {
    ctx.beginPath();
    ctx.arc(x + pos.dx, y + pos.dy, 20, 0, 2 * Math.PI);
    ctx.fill();
  });
  
  // Flower center
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFF00"; // Yellow
  ctx.fill();
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
  ctx.arc(x+20, y-10, 12, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFF00"; // Yellow
  ctx.fill();
  ctx.stroke();
  
  // Duck eye
  ctx.beginPath();
  ctx.arc(x+25, y-15, 3, 0, 2 * Math.PI);
  ctx.fillStyle = "#000"; // Black
  ctx.fill();
  
  // Duck beak
  ctx.beginPath();
  ctx.moveTo(x+30, y-10);
  ctx.lineTo(x+40, y-5);
  ctx.lineTo(x+30, y);
  ctx.closePath();
  ctx.fillStyle = "#FFA500"; // Orange
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
  
  ctx.save();
  stonePositions.forEach(stone => {
    ctx.beginPath();
    ctx.arc(stone.x, stone.y, stone.r, 0, 2 * Math.PI);
    ctx.fillStyle = "#808080"; // Gray
    ctx.fill();
    ctx.strokeStyle = "#696969"; // Darker gray
    ctx.lineWidth = 1;
    ctx.stroke();
  });
  ctx.restore();
}
