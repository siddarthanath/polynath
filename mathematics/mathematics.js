document.addEventListener('DOMContentLoaded', () => {
    // Call showContent to initialize the default content
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
    showContent('pre-university');
});


function showContent(tabId) {
    // Define the HTML content for each tab with inline CSS or classes
    var content = {
        'pre-university': `
        <div class="info-section">
            <h2>Pre-University</h2>
            <p>In the United Kingdom, A-Level Single/Further Mathematics is typically undertaken during the final 2 years of Sixth Form. 
            While different exam boards may have slight variations in their syllabi, there is significant content overlap across all of them. 
            <br>
            To help you excel in your A-Level Single/Further Mathematics journey, choose your current year and respective exam board below. 
            There, you will find a wealth of revision notes, educational videos, and past papers to sharpen your skills and prepare confidently for your examinations.</p>
            <hr>
            <h2>SINGLE</h2>
            <div class="two-column-container">
                <div class="pre-uni-column">
                    <h3>AS-Level</h3>
                    <p class="subtitle">(Year 12)</p>
                    <div class="inner-pre-uni-column-container">
                        <div class="curved-box-column">
                            <div class="tab" onclick="toggleDropdown(this)">
                            EDEXCEL
                            </div>
                            <div class="pre-uni-content">
                                <!-- Dropdown content for EDEXCEL -->
                                <div class="tab" onclick="redirectToPage('as-level/past-papers/edexcel/past-papers.html')">Past Papers</div>
                                <div class="tab" onclick="alert('Under construction!')">Revision Materials</div>
                            </div>
                        </div>
                        <div class="curved-box-column">
                            <div class="tab" onclick="toggleDropdown(this)">
                            OCR MEI
                            </div>
                            <div class="pre-uni-content">
                                <!-- Dropdown content for EDEXCEL -->
                                <div class="tab" onclick="alert('Under construction!')">Past Papers</div>
                                <div class="tab" onclick="redirectToPage('as-level/revision-materials/ocr-mei/revision-materials.html')">Revision Materials</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pre-uni-column">
                    <h3>A-Level</h3>
                    <p class="subtitle">(Year 13)</p>
                    <div class="inner-pre-uni-column-container">
                        <div class="curved-box-column">
                            <div class="tab" onclick="toggleDropdown(this)">
                            EDEXCEL
                            </div>
                            <div class="pre-uni-content">
                                <!-- Dropdown content for EDEXCEL -->
                                <div class="tab" onclick="alert('Under construction!')">Past Papers</div>
                                <div class="tab" onclick="alert('Under construction!')">Revision Materials</div>
                            </div>
                        </div>
                        <div class="curved-box-column">
                            <div class="tab" onclick="toggleDropdown(this)">
                            OCR MEI
                            </div>
                            <div class="pre-uni-content">
                                <!-- Dropdown content for EDEXCEL -->
                                <div class="tab" onclick="alert('Under construction!')">Past Papers</div>
                                <div class="tab" onclick="redirectToPage('a-level/revision-materials/ocr-mei/revision-materials.html')">Revision Materials</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>

            <h2>FURTHER</h2>
            <div class="two-column-container">
                <div class="pre-uni-column">
                    <h3>AS-Level</h3>
                    <p class="subtitle">(Year 12)</p>
                    <div class="inner-pre-uni-column-container">
                        <div class="curved-box-column">
                            <div class="tab" onclick="toggleDropdown(this)">
                            EDEXCEL
                            </div>
                            <div class="pre-uni-content">
                                <!-- Dropdown content for EDEXCEL -->
                                <div class="tab" onclick="alert('Under construction!')">Past Papers</div>
                                <div class="tab" onclick="alert('Under construction!')">Revision Materials</div>
                            </div>
                        </div>
                        <div class="curved-box-column">
                            <div class="tab" onclick="toggleDropdown(this)">
                            OCR MEI
                            </div>
                            <div class="pre-uni-content">
                                <!-- Dropdown content for EDEXCEL -->
                                <div class="tab" onclick="alert('Under construction!')">Past Papers</div>
                                <div class="tab" onclick="alert('Under construction!')">Revision Materials</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pre-uni-column">
                    <h3>A-Level</h3>
                    <p class="subtitle">(Year 13)</p>
                    <div class="inner-pre-uni-column-container">
                        <div class="curved-box-column">
                            <div class="tab" onclick="toggleDropdown(this)">
                            EDEXCEL
                            </div>
                            <div class="pre-uni-content">
                                <!-- Dropdown content for EDEXCEL -->
                                <div class="tab" onclick="alert('Under construction!')">Past Papers</div>
                                <div class="tab" onclick="alert('Under construction!')">Revision Materials</div>
                            </div>
                        </div>
                        <div class="curved-box-column">
                            <div class="tab" onclick="toggleDropdown(this)">
                            OCR MEI
                            </div>
                            <div class="pre-uni-content">
                                <!-- Dropdown content for EDEXCEL -->
                                <div class="tab" onclick="alert('Under construction!')">Past Papers</div>
                                <div class="tab" onclick="alert('Under construction!')">Revision Materials</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
        'university': `
            <div class="info-section">
                <h2>University</h2>
                <p>In University, the study of Mathematics evolves significantly across the 3 years of your degree. Each year not only brings an increase in the complexity and depth of the material but also introduces a wider array of modules from different discplines, offering opportunities to specialise in areas that particularly interest you.
                <ul>
                <li> In Year 1, you'll encounter foundational concepts that lay the groundwork for more advanced studies. This year is crucial for building a strong mathematical base, encompassing a broad range of topics that are essential for further exploration in the field. </li>
                <li> In Year 2, you'll delve deeper into more complex areas of Mathematics. The syllabus expands to introduce a greater variety of modules, allowing you to begin tailoring your learning journey according to your interests and career aspirations. </li>
                <li> In Year 3, you'll have the chance to choose from an even broader range of modules. It's a time for honing your expertise and preparing for the specific career or academic path you wish to pursue after graduation. Depending on the modules you take, this may feel easier or more difficult than your previous years. </li>
                </ul>
                To help you excel in your University journey, choose your current year and respective module choice below. 
                There, you will find a wealth of revision notes, educational videos, and past papers to sharpen your skills and prepare confidently for your examinations. 
                </p>
                <div class="three-column-container">
                <div class="column">
                    <h3>Year 1</h3>
                    <div class="inner-column-container">
                        <div class="curved-box" onclick="alert('Under construction!')">Pure</div>
                        <div class="curved-box" onclick="alert('Under construction!')">Statistics</div>
                        <div class="curved-box" onclick="alert('Under construction!')">Mechanics</div>
                    </div>
                </div>
                <div class="column">
                    <h3>Year 2</h3>
                    <div class="inner-column-container">
                        <div class="curved-box" onclick="alert('Under construction!')">Pure</div>
                        <div class="curved-box" onclick="alert('Under construction!')">Statistics</div>
                        <div class="curved-box" onclick="alert('Under construction!')">Mechanics</div>
                    </div>
                </div>
                <div class="column">
                    <h3>Year 3</h3>
                    <div class="inner-column-container">
                        <div class="curved-box" onclick="alert('Under construction!')">Pure</div>
                        <div class="curved-box" onclick="alert('Under construction!')">Statistics</div>
                        <div class="curved-box" onclick="alert('Under construction!')">Mechanics</div>
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

    // Update the active tab
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(tabId).classList.add('active');

    // Change the content in the content container
    var contentContainer = document.getElementById('content');
    contentContainer.innerHTML = content[tabId];
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
