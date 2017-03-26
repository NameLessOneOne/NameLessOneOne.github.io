$(document).ready(function() {

    $('.extend__text').slideToggle(1000);

    $('.extend').click(function() {
        $('.extend__text').slideToggle(500);
        // $(this).children('.flyout__plus').toggleClass('flyout_hide');
        // $(this).children('.flyout__minus').toggleClass('flyout_hide');
        return false;
    });

    function hide(page) {
        $(page).find('.extend__text').slideUp(500);
        // $(page).find('.flyout__plus').removeClass('flyout_hide');
        // $(page).find('.flyout__minus').addClass('flyout_hide');
    }

    $("[data-fancybox]").fancybox({
        // Options will go here
        zoom: false
    });


    // $('.personalInfo__img').on('click', function() {
    //     var img = $(this);
    //
    //
    // });


    // $(".personalInfo__img").click(function() { // Событие клика на маленькое изображение
    //     var img = $(this); // Получаем изображение, на которое кликнули
    //     var src = img.attr('src'); // Достаем из этого изображения путь до картинки
    //     $("body").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
    //         "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
    //         "<img src='" + src + "' class='popup_img' />" + // Само увеличенное фото
    //         "</div>");
    //     $(".popup").fadeIn(800); // Медленно выводим изображение
    //     $(".popup_bg").click(function() { // Событие клика на затемненный фон
    //         $(".popup").fadeOut(800); // Медленно убираем всплывающее окно
    //         setTimeout(function() { // Выставляем таймер
    //             $(".popup").remove(); // Удаляем разметку всплывающего окна
    //         }, 800);
    //     });
    // });



    //   $('.personalInfo__img').on('click', function(){
    //     $('.personalInfo__img').toggle(true, function(){
    //       $('.personalInfo__img').animate({ "left": "50px"}, "slow" );
    //     $('.personalInfo__img').animate({ "width": "+=50px",  "height": "+=50px"}, "slow" );
    //   });
    //
    // });

    // $('.personalInfo__img').toggle(true);

    // $("#accordion").accordion({
    //     heightStyle: "content"
    //     //  collapsible: true
    // });

});
