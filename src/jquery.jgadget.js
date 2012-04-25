/*!
 * JGadgets JavaScript Framework
 *
 * Copyright 2012, Markel Mairs
 *
 * Date: May 6, 2012
 */

(function( $ ){
  $.fn.gadget = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {}, options);

    return this.each(function() {        
    });
  };
})( jQuery );

$('div').gadget({});