$(document).ready(function() {

    $('.extend__text').slideToggle(1000);

    $('.extend').click(function() {
        $('.extend__text').slideToggle(500);
        return false;
    });

    function hide(page) {
        $(page).find('.extend__text').slideUp(500);
    }

    $("[data-fancybox]").fancybox({
        // Options will go here
    });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true
    });

    // $('.personalInfo__img').on('click', function() {
    //     var img = $(this);
    //
    //
    // });


    //   $('.personalInfo__img').on('click', function(){
    //     $('.personalInfo__img').toggle(true, function(){
    //       $('.personalInfo__img').animate({ "left": "50px"}, "slow" );
    //     $('.personalInfo__img').animate({ "width": "+=50px",  "height": "+=50px"}, "slow" );
    //   });
    //
    // });


});
