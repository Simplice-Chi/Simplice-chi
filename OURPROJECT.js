// Add smooth scrolling to all links
$('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });
  
  // Add animation on scroll
  $(window).scroll(function() {
    $('.about-us, .services, .contact-us').each(function() {
      const position = $(this).offset().top;
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
  
      if (position < scrollTop + windowHeight - 100) {
        $(this).addClass('animated fadeInUp');
      }
    });
  });