function showContent(tabId) {
    // Get all tabs and remove 'active' class
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Set the clicked tab as active
    var activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
    
    // Change the content
    var content = document.getElementById('content');
    content.innerHTML = 'Content for ' + tabId;
}

// Set default active tab and content on page load
window.onload = function() {
    showContent('pre-university');
};
