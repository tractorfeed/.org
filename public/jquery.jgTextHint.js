/*
 * jgTextHint: a jQuery plugin, version: 0.1 (2010-03-04)
 * @requires jQuery
 *
 * jgTextHint is a jQuery plugin to enable you to show neat text hints on your
 * text inputs, based on the initial value of the text box.
 *
 * Dual licensed under the MIT and GPL licenses.
 *
 * Created by Joel Gascoigne - http://myonepage.com/joel
 */
(function($) {

    $.fn.jgTextHint = function(settings) {

         /* default settings */
         var config = {'faded_color': '#666', 'color': '#000'};
         if (settings) $.extend(config, settings);

         /* add text hints to each element */
         this.each(function() {
            var $input = $(this);
            var defaultValue = $input.val();
            $input.css('color', config.faded_color);
            $input.focus( function(){
                if($input.val() == defaultValue) {
                    $input.val('');
                    $input.css('color', config.color);
                }
            });
            $input.blur( function(){
                if($input.val() == '') {
                    $input.val(defaultValue);
                    $input.css('color', config.faded_color);
                }
            });
         });

        return this;
    };

 })(jQuery);
