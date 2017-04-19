var buttonShowHide = document.querySelectorAll('.extend'),
    blockShowHide = document.querySelectorAll('.extend__text');

buttonShowHide.forEach(function(item, i) {
    buttonShowHide[i].addEventListener('click', collapse);
    item.id = "collapseButton" + i;
});
blockShowHide.forEach(function(item, i) {
    item.id = "showHideBlock" + i;
});

function collapse(i) {
    var collapseButtonId = i.target.id,
        tCardButton = document.getElementById(collapseButtonId),
        getIdNumber = collapseButtonId.match(/\d+/),
        showHideBlock = document.getElementById('showHideBlock' + getIdNumber[0]),
        computedStyleMaxHeight = getComputedStyle(showHideBlock);

    if (computedStyleMaxHeight.maxHeight === '0px') {
        showHideBlock.classList.add("extend__text_animationOn");
    } else {
        showHideBlock.classList.remove("extend__text_animationOn");
    }
}

$(document).ready(function() {

    // $('.extend__text').slideToggle(1000);
    //
    // $('.extend').click(function() {
    //     $('.extend__text').slideToggle(500);
    //     return false;
    // });

    // function hide(page) {
    //     $(page).find('.extend__text').slideUp(500);
    // }

    $("[data-fancybox]").fancybox({
        // Options will go here
    });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 2000,
        selectedAttraction: 0.01,
    friction: 0.15
    });
});
