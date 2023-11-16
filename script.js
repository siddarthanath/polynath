document.addEventListener('DOMContentLoaded', () => {
    console.log('PolyNath website loaded!');

    // Sidebar toggle events
    document.querySelector('.navbar-icon').addEventListener('click', toggleSidebar);
    document.querySelector('.closebtn').addEventListener('click', toggleSidebar);

    // Close sidebar on link click
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

    // Start the typewriter effect for the education text after a delay
    setTimeout(() => {
        educationTextElement.textContent = ''; // Clear existing text
        educationTextElement.style.visibility = 'visible'; // Make the text visible for typewriter effect
        educationTextElement.style.opacity = 1; // Set opacity to 1 for the typewriter effect

        function typeWriter() {
            if (i < educationText.length) {
                educationTextElement.textContent += educationText.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Adjust for typing speed
            }
        }

        typeWriter(); // Start the typewriter effect
    }, 2000); // Time delay before starting the typewriter effect
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