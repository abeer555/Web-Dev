// DOM elements
const stopwatchDisplay = document.getElementById("stopwatch");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const dobInput = document.getElementById("dob");
const ageDisplay = document.getElementById("ageDisplay");
const textArea = document.getElementById("textArea");
const charCountDisplay = document.getElementById("charCount");

// Stopwatch functionality
let time = 0;
let running = false;
let interval;

function updateStopwatchDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  stopwatchDisplay.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startButton.addEventListener("click", function() {
  if (!running) {
    running = true;
    interval = setInterval(function() {
      time++;
      updateStopwatchDisplay();
    }, 1000);
  }
});

stopButton.addEventListener("click", function() {
  if (running) {
    running = false;
    clearInterval(interval);
  }
});

resetButton.addEventListener("click", function() {
  running = false;
  clearInterval(interval);
  time = 0;
  updateStopwatchDisplay();
});

// Age calculator
dobInput.addEventListener("change", calculateAge); // Added change event
dobInput.addEventListener("mouseover", calculateAge);

function calculateAge() {
  const dobValue = dobInput.value;
  if (!dobValue) {
    ageDisplay.innerText = "Please enter a valid date of birth.";
    return;
  }
  
  const dob = new Date(dobValue);
  if (isNaN(dob.getTime())) {
    ageDisplay.innerText = "Please enter a valid date of birth.";
    return;
  }
  
  const currentDate = new Date();
  let age = currentDate.getFullYear() - dob.getFullYear();
  const monthDifference = currentDate.getMonth() - dob.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
    age--;
  }
  
  ageDisplay.innerText = `You are ${age} years old.`;
}

// Character counter
textArea.addEventListener("input", function() {
  const charCount = textArea.value.length;
  const wordCount = textArea.value.trim() ? textArea.value.trim().split(/\s+/).length : 0;
  charCountDisplay.innerText = `${charCount} characters, ${wordCount} words`;
});

// Initialize displays
updateStopwatchDisplay();
