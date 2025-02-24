document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Get the input values
    let username = document.getElementById("Uname").value;
    let password = document.getElementById("pwd").value;
  
    // Store the values in local storage
    localStorage.setItem("Uname", username);
    localStorage.setItem("pwd", password);
  
  });