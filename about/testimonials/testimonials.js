  document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        {
          text: "Rowan from Vantage is the real deal: a rare blend of being a sufficiently brilliant mathematician to have a complete, deep and intuitive grasp on the difficult problems set in admissions tests, but also a great teacher who is able to explain the thought process in a way students can understand.",
          author: "Parent of a STEP student who achieved 1 in STEP 2 and S in STEP 3"
        },
        {
          text: "Sid from Vantage is the real deal: a rare blend of being a sufficiently brilliant mathematician to have a complete, deep and intuitive grasp on the difficult problems set in admissions tests, but also a great teacher who is able to explain the thought process in a way students can understand.",
          author: "Parent of a STEP student who achieved 1 in STEP 2 and S in STEP 3"
        },
        // ... Add more testimonials as needed
      ];
    let currentTestimonialIndex = 0;
  
    function updateTestimonial(index) {
      const testimonialText = document.querySelector('.testimonial-text');
      const testimonialAuthor = document.querySelector('.testimonial-author');
      testimonialText.innerText = testimonials[index].text;
      testimonialAuthor.innerText = testimonials[index].author;
    }
  
    function showNextTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    }
  
    // Initialize with the first testimonial
    updateTestimonial(currentTestimonialIndex);
  
    // Set up the automatic testimonial switch every 2 seconds
    let testimonialInterval = setInterval(showNextTestimonial, 2000);
  
    // Event listeners for prev and next buttons
    document.getElementById('prev').addEventListener('click', function() {
      clearInterval(testimonialInterval); // Stop auto-switching when user interacts
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
      testimonialInterval = setInterval(showNextTestimonial, 2000); // Restart auto-switching
    });
  
    document.getElementById('next').addEventListener('click', function() {
      clearInterval(testimonialInterval); // Stop auto-switching when user interacts
      showNextTestimonial();
      testimonialInterval = setInterval(showNextTestimonial, 2000); // Restart auto-switching
    });
  });
  