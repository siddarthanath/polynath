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
    setupReviewSlider();
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
    var welcomeTextElement = document.getElementById('welcome-text');
    // Fade in the welcome text
    welcomeTextElement.style.opacity = 1;
// Time delay before starting the typewriter effect
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

function setupReviewSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.review-item');
    const totalSlides = slides.length;

    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].style.display = 'block';
    }

    // Initialize first slide
    slides[currentSlide].style.display = 'block';

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
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