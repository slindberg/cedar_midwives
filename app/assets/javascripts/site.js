/*jshint eqnull:true */

(function() {
  var lastIndex, currentIndex, nextIndex;

  // When a nav link is clicked, save the index of the link in the nav
  $(document).on('click', 'nav > ul > li', function() {
    nextIndex = $(this).index();
  });

  $(document).on('page:change', function() {
    // Initialize FlowType.JS
    $('#content').flowtype({
      minFont   : 12,
      maxFont   : 24,
      fontRatio : 30,
    });

    // Create a clone of every persistent element
    $('.persistent').each(function() {
      $clone = $(this).clone()
      .removeClass('persistent')
      .addClass('persist')
      .prependTo('body');

      // Save a reference to the clone
      $(this).data('clone', $clone.get(0));
    });

    // Set indexes based on the current page and the last page
    lastIndex = currentIndex;
    currentIndex = $('nav ul > li.active').index();
    nextIndex = null;

    // Animate the content in if it's not a fresh page load
    if (lastIndex != null) {
      animate('#content', 'slide', 'in', currentIndex < lastIndex ? 'left' : 'right');
    }
  });

  $(document).on('page:fetch', function() {
    // Attempt to correct for persistent logo funkiness when scrolled down
    $('body').animate({ scrollTop: 0 }, 'fast');

    // Animate content out
    animate('#content', 'slide', 'out', currentIndex < nextIndex ? 'left' : 'right');
  });

  // Fade in/out persistent elements and their clones
  $(document).on('scroll', function() {
    var scrollTop = $(document).scrollTop();

    $('.persistent').each(function() {
      var offset = $(this).offset();
      var clone = $(this).data('clone');

      if (scrollTop > offset.top) {
        animate(this, 'fade', 'out');
        animate(clone, 'fade', 'in');
      } else {
        animate(this, 'fade', 'in');
        animate(clone, 'fade', 'out');
      }
    });
  });

  // Add CSS classes that trigger animations
  function animate(element, type, direction, side) {
    var $el = $(element);
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
