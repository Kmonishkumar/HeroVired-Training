// Function for the mobile menu toggle
function toggleMenu() {
    var menu = document.getElementById("nav-links");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

// Form submission validation
document.getElementById('contactor').addEventListener('submit', function(event) {
    event.preventDefault();

    var fnameField = document.getElementById('fname');
    var emailField = document.getElementById('email');
    var messageField = document.getElementById('msg');

    var fname = fnameField.value;
    var Ename = emailField.value;
    var message = messageField.value;

    console.log(fname);
    console.log(Ename);
    console.log(message);

    if (!fname || !Ename || !message) {
        alert("Please Fill all the fields in the Contact Form!!!");
        return;
    }

    // Clear the input fields after successful submission
    fnameField.value = "";
    emailField.value = "";
    messageField.value = "";
});
