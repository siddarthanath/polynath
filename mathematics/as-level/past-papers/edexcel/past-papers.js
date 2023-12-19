
function toggleDropdown(clickedElement) {
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

function openWebPage(url) {
    window.open(url, '_blank');
}