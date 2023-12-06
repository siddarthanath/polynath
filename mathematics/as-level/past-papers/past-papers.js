
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
