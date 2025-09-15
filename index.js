function calculateAge() {
  // Get the date of birth from the input field.
  var birthdate = document.getElementById("birthdate").value;

  // Get the current date.
  var today = new Date();

  // Calculate the age.
  var age = today.getFullYear() - birthdate.substring(0, 4);

  // Display the age.
  document.getElementById("age").innerHTML = age;
}

// Bind the calculate button to the calculateAge function.
document.getElementById("calculate").addEventListener("click", calculateAge);