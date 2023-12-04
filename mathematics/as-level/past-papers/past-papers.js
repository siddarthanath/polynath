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
    // Fade in the welcome text
    welcomeTextElement.style.opacity = 1;
// Time delay before starting the typewriter effect
}

function toggleDropdown(clickedElement) {
    // First, we hide all dropdowns except the one that is clicked
    document.querySelectorAll('.pre-uni-content').forEach(function(content) {
        if (content !== clickedElement.nextElementSibling) {
            content.style.display = 'none';
        }
    });

    // Then, we toggle the display of the clicked dropdown
    var dropdown = clickedElement.nextElementSibling;
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function redirectToPage(url) {
    window.location.href = url;
}
