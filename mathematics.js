function showContent(tabId) {
    // Placeholder function to demonstrate content switching
    var content = document.getElementById('content');
    if (tabId == "pre-university") {
    content.innerHTML = <h2>Pre-University</h2>;
    }
    else if (tabId == "university") { content.innerHTML = 'Content for ' + tabId;

    }
    else { content.innerHTML = 'Content for ' + tabId;

    };
}

window.onload = function() {
    showContent('pre-university');
};