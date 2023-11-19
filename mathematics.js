document.addEventListener('DOMContentLoaded', () => {
    console.log('PolyNath website loaded!');

    // Sidebar toggle events
    document.querySelector('.navbar-icon').addEventListener('click', toggleSidebar);
    document.querySelector('.closebtn').addEventListener('click', toggleSidebar);

    // Close sidebar on link click
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => link.addEventListener('click', toggleSidebar));

    // Start the header text animation sequence
});

// Sidebar toggle function
function toggleDropdown(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }
  