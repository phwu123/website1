$(document).ready(function () {
  var tn_array = $('.img-scroll img').map(function () {
    return $(this).attr('src');
  }).get();
  $('.fa-arrow-left').css('visibility', 'hidden');
  $('#2, #3').css('display', 'none');
  var websites = ["welp", "photo", "anime", "anime", "anime", "anime"];
  var imagesLen = tn_array.length;
  var imageCur = 0;
  var bottomLen = 3;

  function toggleVisibility(item, startState) {
    let changeTo = 'visible';
    if (startState === 'visible') {
      changeTo = 'hidden';
    }
    if ($(item).css('visibility') === startState) {
      ($(item).css('visibility', changeTo));
    }
  }

  function selectNext(e) {
    $('.scroll-bar div:nth-child(' + (imageCur + 2) + ') img').css('border-color', 'transparent');
    $('#' + (imageCur + 1)).hide();
    if (e === 'r') {
      if (imageCur < tn_array.length) {
        imageCur += 1;
        selectChange(e);
      }
    }
    if (e === 'l') {
      if (imageCur > -1) {
        imageCur -= 1;
        selectChange(e);
      }
    }
    $('.scroll-bar div:nth-child(' + (imageCur + 2) + ') img').css('border-color', 'red');
  }

  function selectChange(e) {
    $('#' + (imageCur + 1)).show();
    $('.weblink').attr('href', 'https://www.' + websites[imageCur] + '.peterhwu.com');
    if (e === 'r') {
      $('.img-main').attr('src', tn_array[imageCur]);
      if (imageCur === imagesLen - 1) {
        toggleVisibility('.fa-arrow-right', 'visible');
      }
      toggleVisibility('.fa-arrow-left', 'hidden');
    }
    if (e === 'l') {
      $('.img-main').attr('src', tn_array[imageCur]);
      if (imageCur === 0) {
        toggleVisibility('.fa-arrow-left', 'visible');
      }
      toggleVisibility('.fa-arrow-right', 'hidden');
    }
  }

  //right button functionality
  $('.fa-arrow-right').click(function () {
    selectNext('r');
  })
  //left button functionality
  $('.fa-arrow-left').click(function () {
    selectNext('l');
  })
  //keypress functionality
  $(document).keydown(function (e) {
    e.preventDefault();
    switch (e.which) {
      case 37:
        if (imageCur > 0) {
          selectNext('l');
        }
        break;
      case 39:
        if (imageCur < imagesLen - 1) {
          selectNext('r');
        }
        break;
      default: return;
    }
  })
  //image click functionality
  $('.scroll-bar img').click(function () {
    $('#' + (imageCur + 1)).hide();
    var imgSrc = $(this).attr('src');
    var imgInd = $(this).parent('.img-scroll').index() - 1;
    if (imgInd < imagesLen - bottomLen) {
      // indexDif = imageCur;
      // imageCur = imgInd;
      // indexDif = Math.abs(indexDif - imageCur);
      //  $('.slider .slides').animate({ 'margin-left': '-=' + imageWidth * indexDif }, 500);
      // $('.img-main').attr('src', imgSrc);
    } else {
      imageCur = imgInd;
      $('.img-main').attr('src', imgSrc);
    }
    $('#' + (imageCur + 1)).show();
    $('.weblink').attr('href', 'https://www.' + websites[imageCur] + '.peterhwu.com');
    if (imgInd > 0) {
      toggleVisibility('.fa-arrow-left', 'hidden');
    }
    if (imgInd === 0) {
      toggleVisibility('.fa-arrow-left', 'visible');
    }
    if (imgInd < imagesLen - 1) {
      toggleVisibility('.fa-arrow-right', 'hidden');
    }
    if (imgInd === imagesLen - 1) {
      toggleVisibility('.fa-arrow-right', 'visible');
    }
    $('.scroll-bar').children().children().css('border-color', 'transparent');
    $(this).css('border-color', 'red');
  })
  //bouncing arrow scrolling detection
  $(document).scroll(function () {
    if ($(this).scrollTop() < 0.5 * $('body').height()) {
      toggleVisibility('.fa-chevron-down', 'hidden');
    } else {
      toggleVisibility('.fa-chevron-down', 'visible');
    }
  })

})