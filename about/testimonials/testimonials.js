
  
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
    const testimonialElements = document.querySelectorAll('.testimonial-content');
  
    function updateTestimonial(index) {
      const testimonialText = testimonialElements[index].querySelector('.testimonial-text');
      const testimonialAuthor = testimonialElements[index].querySelector('.testimonial-author');
      testimonialText.innerText = testimonials[index].text;
      testimonialAuthor.innerText = testimonials[index].author;
      
      testimonialElements.forEach(el => el.classList.remove('active-testimonial', 'off-screen-left', 'off-screen-right'));
      testimonialElements[index].classList.add('active-testimonial');
    }
  
    function slideTestimonials(nextIndex) {
      const currentElement = testimonialElements[currentTestimonialIndex];
      const nextElement = testimonialElements[nextIndex];
  
      currentElement.classList.add(nextIndex > currentTestimonialIndex ? 'off-screen-left' : 'off-screen-right');
      nextElement.classList.add('active-testimonial');
  
      currentTestimonialIndex = nextIndex;
    }
  
    document.getElementById('prev').addEventListener('click', function() {
      const nextIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      slideTestimonials(nextIndex);
    });
  
    document.getElementById('next').addEventListener('click', function() {
      const nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
      slideTestimonials(nextIndex);
    });
  
    // Initialize with the first testimonial
    updateTestimonial(currentTestimonialIndex);
  });
  

  