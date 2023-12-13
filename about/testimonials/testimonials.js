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
    const testimonialCounterElement = document.querySelector('.testimonial-counter');
  
    function updateTestimonial(index) {
      testimonialTextElement.innerText = testimonials[index].text;
      testimonialAuthorElement.innerText = testimonials[index].author;
  
      // Update the counter
      testimonialCounterElement.innerText = (index + 1) + ' / ' + testimonials.length;
    }
  
    function showNextTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    }
  
    // Automatic change every 2 seconds
    let testimonialInterval = setInterval(showNextTestimonial, 5000);
  
    document.getElementById('prev').addEventListener('click', function() {
      clearInterval(testimonialInterval); // Stop automatic switching
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
      testimonialInterval = setInterval(showNextTestimonial, 5000); // Restart automatic switching
    });
  
    document.getElementById('next').addEventListener('click', function() {
      clearInterval(testimonialInterval); // Stop automatic switching
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
      testimonialInterval = setInterval(showNextTestimonial, 5000); // Restart automatic switching
    });
  
    // Initialize with the first testimonial
    updateTestimonial(currentTestimonialIndex);
  });
  