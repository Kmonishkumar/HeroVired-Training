document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Get the input values
    let username = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;
  
    // Store the values in local storage
    localStorage.setItem("uname", username);
    localStorage.setItem("pwd", password);
  
  });
