const canvas = document.getElementById("clockCanvas");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 180;

function drawClock() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFace();
  drawNumbers();
  drawHands();
  requestAnimationFrame(drawClock);
}

function drawFace() {
  // Create a gradient for the clock face
  const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.95, centerX, centerY, radius * 1.05);
  gradient.addColorStop(0, '#f0f8ff');
  gradient.addColorStop(1, '#87ceeb');

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 5;
  ctx.stroke();
  
  // Center point
  ctx.beginPath();
  ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
  ctx.fillStyle = "#444";
  ctx.fill();
}

function drawNumbers() {
  ctx.font = "bold 22px Arial";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  for (let num = 1; num <= 12; num++) {
    let angle = (num * Math.PI) / 6;
    let x = centerX + Math.cos(angle - Math.PI / 2) * (radius - 30);
    let y = centerY + Math.sin(angle - Math.PI / 2) * (radius - 30);
    ctx.fillText(num, x, y);
  }
}

function drawHands() {
  let now = new Date();
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  drawHand((hours + minutes / 60) * 30, radius * 0.5, 8, "#2E4053");
  drawHand((minutes + seconds / 60) * 6, radius * 0.75, 4, "#34495E");
  drawHand(seconds * 6, radius * 0.85, 2, "#E74C3C");
}

function drawHand(angle, length, width, color) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  let radian = (angle * Math.PI) / 180;
  let x = centerX + Math.cos(radian - Math.PI / 2) * length;
  let y = centerY + Math.sin(radian - Math.PI / 2) * length;
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x, y);
  ctx.stroke();
}

drawClock();
