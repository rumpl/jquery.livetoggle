(function ($) {
    
    $.fn.liveToggle = function (fn1, fn2) {
        var showFn = fn1 || $.noop,
            hideFn = fn2 || $.noop;

        return this.live('click', function () {
            var hide = $(this).data('liveToggle-hide');

            if (!hide || hide === undefined) {
                $(this).data('liveToggle-hide', true);
                return showFn.apply(this);
            } else {
                $(this).data('liveToggle-hide', false);
                return hideFn.apply(this);
            }
        });
    };
    
}(jQuery));