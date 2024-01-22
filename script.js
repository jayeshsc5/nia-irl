function checkPassword() {
    var enteredPassword = document.getElementById("password-input").value;
    var correctPassword = "areyyaarnia"; 

    if (enteredPassword === correctPassword) {
        document.getElementById("password-form").style.display = "none";
        document.getElementById("timeline-content").style.display = "block";
    } else {
        alert("Incorrect password. Try again.");
    }
}
function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const section = document.querySelector('section');
    const toggleButton = document.querySelector('.dark-mode-toggle');
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    section.classList.toggle('dark-mode');
    const emoji = body.classList.contains('dark-mode') ? '🌙' : '☀️';
    toggleButton.innerHTML = emoji;
}