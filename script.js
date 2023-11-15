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
