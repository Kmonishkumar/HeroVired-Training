document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get the input values
  let s_username = document.getElementById("signup_username").value;
  let s_Email = document.getElementById("signup_email").value;
  let s_password = document.getElementById(signup_"password").value;

  // Store the values in local storage
  localStorage.setItem("signup_username", s_username);
  localStorage.setItem("signup_email", s_Email);
  localStorage.setItem("signup_password", s_password);

});
