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
    // Scroll to next section when arrow is clicked
    document.querySelector('.scroll-down-arrow a').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
    });
    window.addEventListener('scroll', () => {
        const aboutSection = document.querySelector('.about-section');
        const aboutImage = document.querySelector('#about-image');
        const aboutText = document.querySelector('.about-section .right');
        
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            aboutImage.style.opacity = '1';
            aboutText.style.opacity = '1';
        }
    });
});

function animateHeaders() {
    var staticTextElement = document.getElementById('static-text');
    var animatedTextElement = document.getElementById('animated-text');
    var welcomeTextElement = document.getElementById('welcome-text');
    var words = ["Learn", "Grow", "Help"];
    var welcomeText = "Welcome to PolyNath";
    var i = 0;
    var j = 0;

    function animateWords() {
        if (j < words.length) {
            animatedTextElement.textContent = words[j];
            j++;
            setTimeout(animateWords, 2000); // Time delay between words
        } else {
            // Once all words have been displayed, start the typewriter effect
            staticTextElement.style.opacity = 0; // Fade out the static text
            setTimeout(() => {
                welcomeTextElement.style.visibility = 'visible';
                welcomeTextElement.style.opacity = 1; // Fade in the welcome text
                typeWriter();
            }, 500); // Short delay before starting typewriter
        }
    }

    function typeWriter() {
        if (i < welcomeText.length) {
            welcomeTextElement.textContent += welcomeText.charAt(i);
            i++;
            setTimeout(typeWriter, 75); // Adjust for typing speed
        }
    }

    // Start the word animation
    animateWords();
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