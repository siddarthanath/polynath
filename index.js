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

    const testimonials = [
        {
          videoSrc: "https://www.youtube.com/watch?v=g7ih6rHdw3M&lc=Ugx7z1FC8joL0CE8QV94AaABAg",
          author: "Quanta Magazine"
        },
        {
          videoSrc: "https://www.youtube.com/watch?v=-KFO0pES-zQ",
          author: "DeepMind"
        },
        // ... Add more video testimonials as needed
      ];
    let currentTestimonialIndex = 0;
    const testimonialIframeElement = document.querySelector('.testimonial-iframe');
    const testimonialAuthorElement = document.querySelector('.testimonial-author');
    const testimonialCounterElement = document.querySelector('.testimonial-counter');
    
    function updateTestimonial(index) {
    // Update the iframe source
    testimonialIframeElement.src = testimonials[index].videoSrc;
    
    // Update the author
    testimonialAuthorElement.innerText = testimonials[index].author;
    
    // Update the counter
    testimonialCounterElement.innerText = (index + 1) + ' / ' + testimonials.length;
    }
      
    function showNextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial(currentTestimonialIndex);
      }
    
      // Automatic change every 2 seconds
      let testimonialInterval = setInterval(showNextTestimonial, 7500);
    
      document.getElementById('prev').addEventListener('click', function() {
        clearInterval(testimonialInterval); // Stop automatic switching
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentTestimonialIndex);
        testimonialInterval = setInterval(showNextTestimonial, 7500); // Restart automatic switching
      });
    
      document.getElementById('next').addEventListener('click', function() {
        clearInterval(testimonialInterval); // Stop automatic switching
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial(currentTestimonialIndex);
        testimonialInterval = setInterval(showNextTestimonial, 7500); // Restart automatic switching
      });
    
      // Initialize with the first testimonial
      updateTestimonial(currentTestimonialIndex);
      // Rest of the slider functionality code...
      
      
});

function animateHeaders() {
    var welcomeTextElement = document.getElementById('welcome-text');
    // Fade in the welcome text
    welcomeTextElement.style.opacity = 1;
// Time delay before starting the typewriter effect
}