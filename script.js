document.addEventListener('DOMContentLoaded', (event) => {
    console.log('PolyNath website loaded!');

    // Set the "Learn" tab as active on page load
    openTab('learn');

    // Event listener for sidebar toggle
    document.querySelector('.navbar-icon').addEventListener('click', toggleSidebar);
    document.querySelector('.closebtn').addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', toggleSidebar);
    });

    // Start the header text animation sequence
    swapTextTypewriterEffect();
});

// Function to swap the header text with a typewriter effect
function swapTextTypewriterEffect() {
    var headerText = document.querySelector('.header-text h1');
    var paragraphText = document.querySelector('.header-text p');
    var welcomeText = "Welcome to PolyNath";
    var educationText = "Empowering education for everyone.";
    var i = 0;

    // Start by showing the welcome message
    headerText.textContent = welcomeText;
    paragraphText.textContent = '';

    // Wait a few seconds, then start the transition
    setTimeout(() => {
        // Fade out the welcome message
        headerText.style.opacity = 0;
        paragraphText.style.opacity = 0;

        setTimeout(() => {
            // Change the text
            headerText.textContent = '';
            paragraphText.textContent = educationText;

            // Typewriter effect for the new message
            function typeWriter() {
                if (i < educationText.length) {
                    paragraphText.innerHTML += educationText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 150); // Adjust for typing speed
                }
            }

            // Start the typewriter effect
            typeWriter();

            // Fade in the new message
            paragraphText.style.opacity = 1;

        }, 2000); // Time to wait before starting the transition
    }, 2000); // Time to display the welcome message before fading out
}

// Tab control
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

// Sidebar toggle
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}
