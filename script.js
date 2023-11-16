document.addEventListener('DOMContentLoaded', () => {
    console.log('PolyNath website loaded!');

    // Event listeners for sidebar toggle
    document.querySelector('.navbar-icon').addEventListener('click', toggleSidebar);
    document.querySelector('.closebtn').addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => link.addEventListener('click', toggleSidebar));

    // Start the header text animation sequence
    animateHeaders();
});

function animateHeaders() {
    var welcomeTextElement = document.getElementById('welcome-text');
    var educationTextElement = document.getElementById('education-text');
    var educationText = "Education for Everyone";
    var i = 0;

    // Fade in the welcome text
    welcomeTextElement.style.opacity = 1;

    // Then, after a delay, start the typewriter effect for the education text
    setTimeout(() => {
        educationTextElement.textContent = ''; // Clear the text

        function typeWriter() {
            if (i < educationText.length) {
                educationTextElement.textContent += educationText.charAt(i);
                i++;
                setTimeout(typeWriter, 150); // Adjust for typing speed
            }
        }

        // Start the typewriter effect
        typeWriter();
        educationTextElement.style.opacity = 1; // Make sure the text is visible
    }, 2000); // Time before starting the typewriter effect
}

// Tab control function
function openTab(tabName) {
    var i, tabcontent, tabheaders;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-header" and remove the "active" class
    tabheaders = document.getElementsByClassName("tab-header");
    for (i = 0; i < tabheaders.length; i++) {
        tabheaders[i].className = tabheaders[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName + "-content").style.display = "block";
    document.getElementById(tabName + "-tab").className += " active";
}

// Sidebar toggle function
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}