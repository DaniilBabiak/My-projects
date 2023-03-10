(function () {
    'use strict';

    $(document).ready(function () {


        let carouselPaused = false;
        let $items = $('.tabs_nav-tabs-swicher');
        let currentActiveIndex = 0;
        let maxIndex = $('.tabs_nav-tabs-swicher').length - 1;

        setInterval(function () {
            if (!carouselPaused) {
                $($items[currentActiveIndex]).removeClass('switcher_active');
                let contentId = $($items[currentActiveIndex]).attr('data-connected-content');
                $('.tabs_nav-tabs_tabs-content-wrapper[data-content-id="' + contentId + '"]').removeClass('active-tab');


                currentActiveIndex++;
                if (currentActiveIndex > maxIndex) {
                    currentActiveIndex = 0;
                }
                $($items[currentActiveIndex]).addClass('switcher_active');
                contentId = $($items[currentActiveIndex]).attr('data-connected-content');
                $('.tabs_nav-tabs_tabs-content-wrapper[data-content-id="' + contentId + '"]').addClass('active-tab');
            }
        }, 2000);
        $(".toggle-button").click(function (){
            $(".toggle-button").toggle();
            carouselPaused = !carouselPaused;
        })
    });
})();

