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

    let boxes = document.querySelectorAll('.rectangle-box');
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            let dropdown = this.querySelector('.dropdown-content');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });
    
});

function animateHeaders() {
    var welcomeTextElement = document.getElementById('welcome-text');
    // Fade in the welcome text
    welcomeTextElement.style.opacity = 1;
// Time delay before starting the typewriter effect
}