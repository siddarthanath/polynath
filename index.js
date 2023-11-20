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
    const reviews = ["Great work.", "Good job."];
    let currentReviewIndex = 0;

    function showReview(index) {
        reviewSlide.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            reviewSlide.innerHTML = `<span>${reviews[index]}</span>`;
            reviewSlide.style.transform = 'translateX(0)';
        }, 500); // Half the transition time
    }

    function nextReview() {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        showReview(currentReviewIndex);
    }

    function previousReview() {
        currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
        showReview(currentReviewIndex);
    }

    document.getElementById('rightArrow').addEventListener('click', nextReview);
    document.getElementById('leftArrow').addEventListener('click', previousReview);

    setInterval(nextReview, 4000);
    showReview(currentReviewIndex); // Show the first review
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