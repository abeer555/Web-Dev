// Dynamic Elements Creator
document.addEventListener('DOMContentLoaded', function() {
  createTable();
  createButton();
  createTextbox();
  createListItemAdder();
  createKeyCount();
});

function createTable() {
  const table = document.createElement("table");
  table.classList.add("dynamic-table");
  
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row ${i + 1}, Column ${j + 1}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  
  const container = document.getElementById("table");
  if (container) container.appendChild(table);
}

function createButton() {
  const button = document.createElement("button");
  button.textContent = "Mouse Over Me";
  button.classList.add("color-button");
  
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "green";
  });
  
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "red";
  });
  
  // Set initial color
  button.style.backgroundColor = "red";
  
  const container = document.getElementById("button");
  if (container) container.appendChild(button);
}

function createTextbox() {
  const textbox = document.createElement("input");
  textbox.type = "text";
  textbox.placeholder = "Type here...";
  textbox.style.backgroundColor = "green";
  textbox.classList.add("dynamic-textbox");
  
  textbox.addEventListener("focus", () => {
    textbox.style.backgroundColor = "yellow";
  });
  
  textbox.addEventListener("blur", () => {
    textbox.style.backgroundColor = "green";
  });
  
  textbox.addEventListener("change", () => {
    alert("Hello, welcome to the page!");
  });
  
  const container = document.getElementById("textbox");
  if (container) container.appendChild(textbox);
}

function createListItemAdder() {
  const form = document.createElement("form");
  const inputField = document.createElement("input");
  const button = document.createElement("button");
  const ul = document.createElement("ul");
  
  inputField.type = "text";
  inputField.placeholder = "Enter list item";
  button.textContent = "Add Item to List";
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addListItem();
  });
  
  button.addEventListener("dblclick", addListItem);
  
  function addListItem() {
    if (!inputField.value.trim()) return;
    
    const li = document.createElement("li");
    li.textContent = inputField.value;
    ul.appendChild(li);
    inputField.value = "";
    inputField.focus();
  }
  
  form.appendChild(inputField);
  form.appendChild(button);
  
  const container = document.getElementById("list");
  if (container) {
    container.appendChild(form);
    container.appendChild(ul);
  }
}

function createKeyCount() {
  const inputField = document.createElement("input");
  const countDisplay = document.createElement("div");
  
  inputField.type = "text";
  inputField.placeholder = "Type to count keystrokes";
  countDisplay.classList.add("count-display");
  
  let keyCount = 0;
  
  inputField.addEventListener("keyup", () => {
    keyCount++;
    countDisplay.textContent = `Key Pressed: ${keyCount} times`;
  });
  
  // Initialize count display
  countDisplay.textContent = "Key Pressed: 0 times";
  
  const container = document.getElementById("keyCount");
  if (container) {
    container.appendChild(inputField);
    container.appendChild(countDisplay);
  }
}
