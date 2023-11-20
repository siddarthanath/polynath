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
    startSlideshow();
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

function startSlideshow() {
    let slideIndex = 0;
    let reviews = [
        "Great work.",
        "Good job.",
        "Excellent resource."
        // Add more reviews as needed
    ];

    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let numbertext = document.getElementsByClassName("numbertext");
        let reviewText = document.getElementsByClassName("review-text");
        let dots = document.getElementsByClassName("dot");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        for (i = 0; i < slides.length; i++) {
            numbertext[i].innerText = (i + 1) + " / " + slides.length;
            reviewText[i].innerText = reviews[i]; // Set the review text
        }

        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 5000); // Change slide every 2 seconds
    }
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