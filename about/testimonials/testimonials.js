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
  
    let currentTestimonialIndex = 0; // This will start with the first testimonial
  
    function updateTestimonial(index) {
      const testimonialText = document.querySelector('.testimonial-text');
      const testimonialAuthor = document.querySelector('.testimonial-author');
      testimonialText.innerText = testimonials[index].text;
      testimonialAuthor.innerText = testimonials[index].author;
    }
  
    // Initialize with the first testimonial
    updateTestimonial(currentTestimonialIndex);
  
    document.getElementById('prev').addEventListener('click', function() {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });
  
    document.getElementById('next').addEventListener('click', function() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });
  });
  