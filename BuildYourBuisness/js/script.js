$(document).ready(function() {

    $(function() {
        $('.jcarousel').jcarousel({
                // Configuration goes here
                animation: 'slow',
                wrap: 'both'

            })
            .jcarouselAutoscroll({
                interval: 3000,
                target: '+=1',
                autostart: true
            });
        $('.jcarousel-pagination').jcarouselPagination({
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            })
            .on('jcarouselpagination:active', 'a', function() {
                $('.jcarousel-pagination>a').removeClass('active');
                $(this).addClass('active');
            });

        $('.jcarousel-pagination a:first').addClass('active');
    });

    $('.services-list__link1').hover(function() {
        $('.services-list__link1_hover-image').rotate({
            angle: 0,
            animateTo: 360,
            duration: 500
        });
    }, function() {
        $('.services-list__link1_hover-image').rotate({
            angle: 360,
            animateTo: 0,
            duration: 500
        });
    });

    $(function() {
        $(".accordion").accordion();
    });

});
