document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Display sign-in successful message
    alert("Sign in successful");

    // Refresh the page to clear input fields
    window.location.reload();
});
