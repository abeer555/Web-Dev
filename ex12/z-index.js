/**
 * Updates the z-index of a selected element and refreshes the display of all elements' z-index values
 */
function changeZIndex() {
  // Get the selected element based on dropdown value
  const selectedElementId = document.getElementById("element").value;
  const selectedBox = document.getElementById(selectedElementId);

  // Get the new z-index value
  const newIndex = parseInt(document.getElementById("zIndex").value) || 0;

  // Apply the new z-index to the selected element
  selectedBox.style.zIndex = newIndex;

  // Update the display of z-index values for all three boxes
  updateZIndexDisplay();
}

/**
 * Updates the displayed z-index values for all boxes
 */
function updateZIndexDisplay() {
  for (let i = 1; i <= 3; i++) {
    const box = document.getElementById(`box${i}`);
    const zDisplay = document.getElementById(`z${i}`);
    zDisplay.innerText = box.style.zIndex || "0";
  }
}
