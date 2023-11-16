document.addEventListener('DOMContentLoaded', (event) => {
    console.log('PolyNath website loaded!');

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

function swapTextTypewriterEffect() {
    var headerText = document.querySelector('.header-text h1');
    var paragraphText = document.querySelector('.header-text p');
    var welcomeText = "Welcome to PolyNath";
    var educationText = "Education for Everyone";
    var i = 0;

    headerText.textContent = welcomeText;
    paragraphText.textContent = '';

    // Start the typewriter effect after the welcome message has been displayed for a while
    setTimeout(() => {
        // Clear the welcome message and start the typewriter effect
        headerText.textContent = '';

        function typeWriter() {
            if (i < educationText.length) {
                paragraphText.innerHTML += educationText.charAt(i);
                i++;
                setTimeout(typeWriter, 150); // Adjust for typing speed
            }
        }

        // Start the typewriter effect
        paragraphText.style.opacity = 1; // Make sure the paragraph is visible
        typeWriter();
    }, 4000); // Time before starting the typewriter effect
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
