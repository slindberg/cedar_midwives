/*jshint eqnull:true */

(function() {
  var lastIndex, currentIndex, nextIndex;

  // Detect whether the device uses a touch screen
  var isTouchDevice = 'ontouchstart' in document || 'onmsgesturechange' in document;

  // Enable the responsive nave on touch devices
  if (isTouchDevice) {
    $(document).on('touchend', '.menu', function() {
      $('nav').toggleClass('open');
    });
  }

  // When a nav link is clicked, save the index of the link in the nav
  $(document).on('click', 'nav > ul > li', function() {
    nextIndex = $(this).index();
  });

  $(document).on('page:change', function() {
    // Set indexes based on the current page and the last page
    lastIndex = currentIndex;
    currentIndex = $('nav ul > li.active').index();
    nextIndex = null;

    // Animate the content in if it's not a fresh page load
    if (lastIndex != null) {
      animate('.content', 'slide', 'in', currentIndex < lastIndex ? 'left' : 'right');
    }
  });

  $(document).on('page:fetch', function() {
    // Animate content out
    animate('.transition', 'slide', 'out', currentIndex < nextIndex ? 'left' : 'right');
  });

  if (!isTouchDevice) {
    // Fade in/out persistent elements and their clones
    $(document).on('scroll', function() {
      var scrollTop = $(document).scrollTop();
      var $el = $('.persistent');
      var cutoff = $el.offset().top + $el.height() / 2;

      if (scrollTop > cutoff) {
        animate('.persist', 'fade', 'in');
      } else {
        animate('.persist', 'fade', 'out');
      }
    });
  }

  // Add CSS classes that trigger animations
  function animate(selector, type, direction, side) {
    var $el = $(selector);
    var visibility = $el.css('visibility');

    // Don't trigger animations that will have no effect
    if (type !== 'fade' || (visibility === 'visible' && direction === 'out' || visibility === 'hidden' && direction === 'in')) {
      // Remove other animation classes of the same type
      $el.removeClass(function(index, classes) {
        return classes.split(' ').filter(function(name) {
          return name.indexOf(type) === 0;
        }).join(' ');
      });

      $el.addClass('animated ' + type + '-' + direction + (side ? '-' + side : ''));
    }
  }
}());
