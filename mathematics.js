function showContent(tabId) {
    // Placeholder function to demonstrate content switching
    var content = document.getElementById('content');
    if (tabId == "pre-university") {
    content.innerHTML = document.getElementById(tabId);
    }
    else if (tabId == "university") { content.innerHTML = 'Content for ' + tabId;

    }
    else { content.innerHTML = 'Content for ' + tabId;

    };
}

window.onload = function() {
    showContent('pre-university');
};