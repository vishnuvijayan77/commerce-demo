/**
 * Custom scripts (for UH+).
 */

(function ($, Drupal) {

  /**
   * UH Event - Scripts w/o AJAX events.
   *
   * This section is for general scripts that no not involve any AJAX events.
   */

  // Move title into first paragraph
  $('.product--full--uh-event .page-title').prependTo('.paragraph--type--2-column-image-content__content:first');

  // Paragraph buttons.
  $('.product--full--uh-event .paragraph a').each(function (event) {
    // If Register Now link.
    if ($(this).text().toLowerCase() === 'register now') {
      // Add highlight class.
      $(this).addClass('highlight');
      // Add click event.
      $(this).click(function (event) {
        // Prevent link default.
        event.preventDefault();
        // Scroll to add to cart form.
        $('html, body').animate({
          scrollTop: $(".product__event").offset().top -200
        }, 700);
      });
    }

    // If Find Out More link.
    if ($(this).text().toLowerCase() === 'learn more') {
      // Add click event.
      $(this).click(function (event) {
        // Prevent link default.
        event.preventDefault();

        // Scroll to next paragraph.
        $('html, body').animate({
          scrollTop: $(".product__content--top .field__item:nth-of-type(2)").offset().top
        }, 700);
      });
    }
  });

  /**
   * UH Event - Scripts w/ AJAX events.
   *
   * This section is for general scripts that involve AJAX events.
   */

  Drupal.behaviors.uhrecurring = {
    attach: function(context, settings) {

      // Do stuff here.

    }
  };

})(jQuery, Drupal);
