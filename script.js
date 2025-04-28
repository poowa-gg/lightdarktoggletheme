// Select the toggle button and body element

const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Function to toggle the theme
 function toggleTheme() {
    // Toggle the 'dark-mode' class on body
    body.classList.toggle('dark-mode');
 }

 // update button text based on current theme
 function updateButtonText() {
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Switch to Light Mode';
    } else {
        toggleBtn.textContent = 'Switch to Dark Mode';
    }
 }
 // Attach click event listener to the  button
 toggleBtn.addEventListener('click', toggleTheme);