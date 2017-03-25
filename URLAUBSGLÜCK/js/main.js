$(document).ready(function() {

    var pictureChange = setInterval(randomWord, 5000);

    function apiImageFound(input) {
        var API_KEY = '4860856-b929b3ffa0d340129f3688555';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(input) + "&orientation=horizontal&min_width=620&min_height=310&per_page=7";
        $.getJSON(URL, function(data) {



            if (parseInt(data.totalHits) > 0)

                $.each(data.hits, function(i, hit) {
                    var imgUrl = hit.webformatURL;
                    var imgClass = '.holiday-pics__img' + i;
                    var textClass = '.holiday-pics__text' + i;

                    $(imgClass).attr('src', imgUrl);
                    $(textClass).text(hit.tags);
                });

            else {
                $('.holiday-pics__img').css("backgroundColor", "grey").removeAttr('src');
                $('.holiday-pics__text').text('Nothing Found!');
            }

        });
    };

    $('.holiday-form__button').on('click', function(event) {
        clearInterval(pictureChange);
        event.preventDefault();
        var input = $('.holiday-form__input').val();
        apiImageFound(input);
    });

    function randomWord() { // выбирает радномное слово из списка randomWords для api поиска
        i = Math.floor(Math.random() * randomWords.length);
        input = randomWords[i];
        apiImageFound(input);
    };

    $('.main-carousel').flickity({
        // options
        resize: false,
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        wrapAround: true
    });


    $('.grid').masonry({
        // options
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        gutter: '.gutter-sizer',
        percentPosition: true
    });

});
