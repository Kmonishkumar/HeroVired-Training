document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get the input values
  let s_username = document.getElementById("username").value;
  let s_Email = document.getElementById("email").value;
  let s_password = document.getElementById("password").value;

  // Store the values in local storage
  localStorage.setItem("username", s_username);
  localStorage.setItem("email", s_Email);
  localStorage.setItem("password", s_password);

});
