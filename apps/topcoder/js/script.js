  $(document).ready(function() {

      /* Using onePageScroll Plugin by pete R */
      onePageScroll(".main", {
          // sectionContainer accepts any kind of selector in case you don't want to use section
          sectionContainer: "section",
          // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in"
          easing: "linear",
          // AnimationTime let you define how long each section takes to animate
          animationTime: 1000,
          // Activate the keyboard controls for up and down navigation
          keyboard: true,
          // the browser's width is less than 1100, the fallback will kick in.
          responsiveFallback: 1100

      });

  });

  /* add and remove class on widow resize for eliminating plugins default behavior like height size, etc  */
  $(window).on('resize', function() {
      var win = $(this);
      if (win.width() < 1100) {

          $('section').removeClass('ops-section');
          $('div').removeClass('border-right');

      }
      else {
          $('section').addClass('ops-section');
      }

  });