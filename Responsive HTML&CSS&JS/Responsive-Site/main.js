(function () {
    'use strict';

    $(function() {
        $('#dropdown-toggle').click(function (e){
            e.preventDefault();
            e.stopImmediatePropagation();
            $('.dropdown-toggle_menu').toggleClass('visible');
        });
    
        $('body').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            $('.dropdown-toggle_menu').removeClass('visible');
        });
    });    
})();

$.snowfall.start({
    content:'<i class="fa fa-snowflake-o"></i>',
    size: {
        min: 20,
        max: 30,
    }
});