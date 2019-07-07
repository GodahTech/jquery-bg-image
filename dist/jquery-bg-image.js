/**
 jQuery BG Image JS
 @description Get background image and return object
 @author Godahtech | Soluções Digitais - Roberto W. Godoy
 @version 1.0.0
 @url https://github.com/godoyrw/jquery-bg-image
 **/

(function ($) {
    /**
     * Explicitly strict mode
     */
    "use strict";

    /**
     * bgImage
     *
     * @type (function(*=:void))
     * @param callback
     * @returns {boolean|jQuery|HTMLElement}
     */
    $.fn.bgImage = function (callback) {
        /**
         * Check if is function callback
         */
        if (typeof callback !== "function") return false;

        var regexp = /url\((.+)\)/i;
        var res = regexp.exec($(this).css("background-image"));

        /**
         * Check if has background image
         */
        if (res != null) {
            var img = $("<img id='bgImage' alt='BG Image JS' src='#' />");
            img.hide();
            img.bind("load", function (event) {
                callback.call(this, event);
                img.remove();
            });
            $('body').append(img);
            img.attr('src', res[1].replace(/["']/gi, ""));

        } else {
            console.error("BG Image JS: Image background not set", this);
            return false;
        }
    }

})(jQuery);
