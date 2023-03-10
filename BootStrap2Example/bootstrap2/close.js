$(document).ready(function (){
    $( ".section-timer-close-item" ).click(function(){
        $( ".timer-container" ).slideUp(777);
        $('.timer-container-small').fadeTo(777 ,.33);
    });
    $(".timer-container-small").click( function (){
        $('.timer-container-small').fadeOut(333);
        $( ".timer-container" ).click().slideDown(777);
    });

});
