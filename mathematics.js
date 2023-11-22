// script.js

function showContent(tabId) {
    // Define the HTML content for each tab with inline CSS or classes
    var content = {
        'pre-university': `
        <div class="info-section">
            <h2>Pre-University</h2>
            <p>In the United Kingdom, A-Level Mathematics is typically undertaken during the final two years of Sixth Form. 
            While different exam boards may have slight variations in their syllabi, there is significant content overlap across all of them. 
            To help you excel in your A-Level Mathematics journey, choose your current year and respective exam board below. 
            There, you will find a wealth of revision notes, educational videos, and past papers to sharpen your skills and prepare confidently for your examinations.</p>
            <div class="two-column-container">
                <div class="column">
                    <h3>AS-Level</h3>
                    <p class="subtitle">(Year 12)</p>
                    <div class="inner-column-container">
                        <div class="curved-box" onclick="alert('Edexcel AS-Level Information')">Edexcel</div>
                        <div class="curved-box" onclick="alert('OCR MEI AS-Level Information')">OCR MEI</div>
                    </div>
                </div>
                <div class="column">
                    <h3>A-Level</h3>
                    <p class="subtitle">(Year 13)</p>
                    <div class="inner-column-container">
                        <div class="curved-box" onclick="alert('Edexcel A-Level Information')">Edexcel</div>
                        <div class="curved-box" onclick="alert('OCR MEI A-Level Information')">OCR MEI</div>
                    </div>
                </div>
            </div>
        </div>
        `,
        'university': `
            <div class="info-section">
                <h2>University</h2>
                <p>In University, the study of Mathematics evolves significantly across the 3 years of your degree. Each year not only brings an increase in the complexity and depth of the material but also introduces a wider array of modules, offering opportunities to specialise in areas that particularly interest you.
                <ul>
                <li> In Year 1, you'll encounter foundational concepts that lay the groundwork for more advanced studies. This year is crucial for building a strong mathematical base, encompassing a broad range of topics that are essential for further exploration in the field. The focus is on ensuring a solid understanding of core principles. </li>
                <li> In Year 2, you'll delve deeper into more complex areas of Mathematics. The syllabus expands to introduce a greater variety of modules, allowing you to begin tailoring your learning journey according to your interests and career aspirations. This year challenges you to apply your foundational knowledge to more intricate and specialized topics. </li>
                <li> In Year 3, you'll have the chance to choose from an even broader range of modules, each designed to provide in-depth knowledge in specific areas of Mathematics. It's a time for honing your expertise and preparing for the specific career or academic path you wish to pursue after graduation. Depending on the modules you take, this may feel easier or more difficult than your previous years. </li>
                </ul>
                To help you excel in your University journey, choose your current year and respective module choice below. 
                There, you will find a wealth of revision notes, educational videos, and past papers to sharpen your skills and prepare confidently for your examinations. 
                </p>
                <div class="three-column-container">
                <div class="column">
                    <h3>Year 1</h3>
                    <div class="inner-column-container">
                        <div class="curved-box" onclick="alert('Year 1: Pure')">Pure</div>
                        <div class="curved-box" onclick="alert('Year 1: Statistics')">Statistics</div>
                        <div class="curved-box" onclick="alert('Year 1: Mechanics')">Mechanics</div>
                    </div>
                </div>
                <div class="column">
                    <h3>Year 2</h3>
                    <div class="inner-column-container">
                        <div class="curved-box" onclick="alert('Year 2: Pure')">Pure</div>
                        <div class="curved-box" onclick="alert('Year 2: Statistics')">Statistics</div>
                        <div class="curved-box" onclick="alert('Year 2: Mechanics')">Mechanics</div>
                    </div>
                </div>
                <div class="column">
                    <h3>Year 3</h3>
                    <div class="inner-column-container">
                        <div class="curved-box" onclick="alert('Year 3: Pure')">Pure</div>
                        <div class="curved-box" onclick="alert('Year 3: Statistics')">Statistics</div>
                        <div class="curved-box" onclick="alert('Year 3: Mechanics')">Mechanics</div>
                    </div>
                </div>
            </div>
        `,
        'post-university': `
            <div class="info-section">
                <h2>Post-University</h2>
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
