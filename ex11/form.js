function displayTime() {
  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    document.getElementById("timeDisplay").innerHTML = "Current Time: " + time;
  }, 1000);
}

function printFormDetails() {
  let gender = document.getElementsByName("gender");
  let selectedGender = "";
  for (let i of gender) {
    if (i.checked) {
      selectedGender = i.value;
    }
  }
  let country = document.getElementById("country").value;
  let preferences = document.getElementsByName("preferences");
  let selectedPreferences = [];
  for (let i of preferences) {
    if (i.checked) {
      selectedPreferences.push(i.value);
    }
  }
  console.log("Selected Gender:", selectedGender);
  console.log("Selected Country:", country);
  console.log("Selected Preferences:", selectedPreferences.join(", "));
}

function validateForm() {
  let isValid = true;
  let name = document.getElementById("name").value.trim();
  if (name === "" || name.length > 15) {
    document.getElementById("nameError").innerText = "Enter a valid name (max 15 characters)";
    isValid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  let address = document.getElementById("address").value.trim();
  if (address === "") {
    document.getElementById("addressError").innerText = "Address is required";
    isValid = false;
  } else {
    document.getElementById("addressError").innerText = "";
  }

  let zip = document.getElementById("zipcode").value.trim();
  if (!/^\d{5,6}$/.test(zip)) {
    document.getElementById("zipError").innerText = "Enter a valid numeric Zip Code (5-6 digits)";
    isValid = false;
  } else {
    document.getElementById("zipError").innerText = "";
  }

  let country = document.getElementById("country").value;
  if (country === "") {
    document.getElementById("countryError").innerText = "Select a country";
    isValid = false;
  } else {
    document.getElementById("countryError").innerText = "";
  }

  let genderChecked = document.querySelector('input[name="gender"]:checked');
  if (!genderChecked) {
    document.getElementById("genderError").innerText = "Select a gender";
    isValid = false;
  } else {
    document.getElementById("genderError").innerText = "";
  }

  let preferencesChecked = document.querySelector('input[name="preferences"]:checked');
  if (!preferencesChecked) {
    document.getElementById("preferencesError").innerText = "Select at least one preference";
    isValid = false;
  } else {
    document.getElementById("preferencesError").innerText = "";
  }

  let phone = document.getElementById("phone").value.trim();
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
    isValid = false;
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  let email = document.getElementById("email").value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  let password = document.getElementById("password").value;
  if (!/(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).{8,15}/.test(password)) {
    document.getElementById("passwordError").innerText = "Password must be 8-15 characters, contain a number, letter & special character";
    isValid = false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  let pan = document.getElementById("pan").value.trim();
  if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(pan)) {
    document.getElementById("panError").innerText = "Enter a valid 10-digit PAN number (ABCDE1234F)";
    isValid = false;
  } else {
    document.getElementById("panError").innerText = "";
  }

  printFormDetails();
  return isValid;
}