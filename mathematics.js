// script.js

function showContent(tabId) {
    // Define the HTML content for each tab with inline CSS or classes
    var content = {
        'pre-university': `
        <div class="info-section">
            <h2>Pre-University</h2>
            <p>In the United Kingdom, A-Level Mathematics is typically undertaken during the final two years of high-school/sixth-form, Year 12 (AS-Level) and Year 13 (A-Level), usually at the age of 16 and above. 
            While different exam boards may have slight variations in their syllabi, there is significant content overlap across all of them. 
            To help you excel in your A-Level Mathematics journey, choose your current year and respective exam board below. 
            There, you will find a wealth of revision notes, educational videos, and past papers to sharpen your skills and prepare confidently for your examinations.</p>
            <div class="two-column-container">
                <div class="column" id="as-level">
                    <h3>AS-Level <span class="subtitle">(Year 12)</span></h3>
                    <div class="clickable-box" onclick="alert('Edexcel AS-Level Information')">Edexcel</div>
                    <div class="clickable-box" onclick="alert('OCR MEI AS-Level Information')">OCR MEI</div>
                </div>
                <div class="column" id="a-level">
                    <h3>A-Level <span class="subtitle">(Year 13)</span></h3>
                    <div class="clickable-box" onclick="alert('Edexcel A-Level Information')">Edexcel</div>
                    <div class="clickable-box" onclick="alert('OCR MEI A-Level Information')">OCR MEI</div>
                </div>
            </div>
        </div>
        `,
        'university': `
            <div class="info-section">
                <h2>University Curriculum</h2>
                <p>Details about courses taken during university.</p>
                <!-- More structured content here -->
            </div>
        `,
        'post-university': `
            <div class="info-section">
                <h2>Post-University Opportunities</h2>
                <p>Details about potential career paths and further education.</p>
                <!-- More structured content here -->
            </div>
        `
    };

    // Get all tabs and remove 'active' class
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    // Set the clicked tab as active
    document.getElementById(tabId).classList.add('active');

    // Change the content in the content container
    var contentContainer = document.getElementById('content');
    contentContainer.innerHTML = content[tabId];
}

// Set default active tab and content on page load
window.onload = function() {
    showContent('pre-university');
};
