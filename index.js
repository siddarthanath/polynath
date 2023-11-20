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

function setupReviewSlider() {
    const reviewSlide = document.getElementById('reviewSlide');
    const reviews = ["Great work.", "Good job."]; // Add more phrases as needed
    let currentReviewIndex = 0;

    function showNextReview() {
        reviewSlide.style.opacity = 0; // Hide the current text

        // Change the text after a short delay
        setTimeout(() => {
            currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
            reviewSlide.innerHTML = `<span>${reviews[currentReviewIndex]}</span>`;
            reviewSlide.style.opacity = 1; // Show the new text
        }, 1000); // Delay of 1 second
    }

    setInterval(showNextReview, 4000); // Change review every 4 seconds
    showNextReview(); // Show the first review
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