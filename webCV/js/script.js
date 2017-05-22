setInterval(function() {
    var borderWidthVal = document.documentElement.clientWidth,
    triangleDiv = document.querySelector('.triangle');
    // document.querySelector('.wrapper3-triangle').style.borderLeft = borderWidth + 'px solid transparent';
    document.querySelector('.triangle').style.borderRight = borderWidthVal + 'px solid transparent',
    element = borderWidthVal + 'px solid transparent';

    if (borderWidthVal < 550) {
      triangleDiv.style.cssText = 'border-top: 2080px solid rgba(1, 209, 251, 0.6);';
    } else if (borderWidthVal < 785) {
      triangleDiv.style.cssText = 'border-top: 580px solid rgba(1, 209, 251, 0.6);';
    } else if (borderWidthVal < 1076) {
      triangleDiv.style.cssText = 'border-top: 380px solid rgba(1, 209, 251, 0.6);';
    } else if (borderWidthVal < 1500) {
      triangleDiv.style.cssText = 'border-top: 220px solid rgba(1, 209, 251, 0.6);';
    } else {
      triangleDiv.style.cssText = 'border-top: 150px solid rgba(1, 209, 251, 0.6);';
    }

}, 300);

;(function(){
  var buttonShowHide = document.querySelectorAll('.extend'),
      blockShowHide = document.querySelectorAll('.extend__text');

  buttonShowHide.forEach(function(item, i) {
      buttonShowHide[i].addEventListener('click', collapse);
      item.id = "collapseButton" + i;
  });
  blockShowHide.forEach(function(item, i) {
      item.id = "showHideBlock" + i;
  });

  function collapse(e) {
      var collapseButtonId = e.target.id,
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
}());


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
