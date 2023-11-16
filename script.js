document.addEventListener('DOMContentLoaded', (event) => {
    console.log('PolyNath website loaded!');

    // Typewriter effect initialization
    initTypeWriter();

    // Set the "Learn" tab as active on page load
    openTab('learn');

    // Event listener for sidebar toggle
    document.querySelector('.navbar-icon').addEventListener('click', toggleSidebar);
    document.querySelector('.closebtn').addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', toggleSidebar);
    });
});

// Typewriter effect
function initTypeWriter() {
    var text = "Education for Everyone";
    var i = 0;
    var dynamicText = document.getElementById('dynamic-text');
    if (!dynamicText) return; // Stop if element is not found

    function typeWriter() {
        if (i < text.length) {
            dynamicText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust for typing speed
        }
    }

    typeWriter(); // Start the effect
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
