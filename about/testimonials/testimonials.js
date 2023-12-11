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
    const testimonialTextElement = document.querySelector('.testimonial-text');
    const testimonialAuthorElement = document.querySelector('.testimonial-author');
  
    function updateTestimonial(index) {
      // Fade out the current testimonial
      testimonialTextElement.style.opacity = '0';
      testimonialAuthorElement.style.opacity = '0';
  
      // After fade out, update text and fade in the new testimonial
      setTimeout(function() {
        testimonialTextElement.innerText = testimonials[index].text;
        testimonialAuthorElement.innerText = testimonials[index].author;
        testimonialTextElement.style.opacity = '1';
        testimonialAuthorElement.style.opacity = '1';
      }, 1000); // This timeout should match the CSS transition time
    }
  
    document.getElementById('prev').addEventListener('click', function() {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });
  
    document.getElementById('next').addEventListener('click', function() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });
  
    // Initialize with the first testimonial
    updateTestimonial(currentTestimonialIndex);
  });
  