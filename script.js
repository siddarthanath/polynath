document.addEventListener('DOMContentLoaded', (event) => {
    console.log('PolyNath website loaded!');
});

document.addEventListener('DOMContentLoaded', function() {
    // Other code...

    // Typewriter effect
    var text = "Education for Everyone";
    var i = 0;
    var dynamicText = document.getElementById('dynamic-text');

    function typeWriter() {
        if (i < text.length) {
            dynamicText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Adjust for typing speed
        }
    }

    typeWriter(); // Start the effect
});

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

// Set the "Learn" tab as active on page load
document.addEventListener('DOMContentLoaded', function() {
    openTab('learn'); // Default to showing the 'Learn' tab content
});