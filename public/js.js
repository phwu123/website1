$(document).ready(function () {
  var tn_array = $('.slides img').map(function () {
    return $(this).attr('src');
  }).get();
  $('.image-wrapper').attr('src', tn_array[0]);
  $('.fa-arrow-left').css('visibility', 'hidden');
  $('#2, #3').css('display', 'none');
  var websites = ["welp", "photo", "anime"];

  var imagesLen = tn_array.length;
  var imageCur = 0;
  var imageWidth = 0;
  var bottomLen = 3;
  var indexDif;

  function selectNext(e) {
    $('ul li:nth-child(' + (imageCur + 1) + ')').css('border-color', 'transparent');
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
    $('ul li:nth-child(' + (imageCur + 1) + ')').css('border-color', 'red');
  }

  function selectChange(e) {
    $('#' + (imageCur + 1)).show();
    $('.weblink').attr('href', 'https://www.' + websites[imageCur] + '.peterhwu.com');
    if (e === 'r') {
      $('.slider .slides').animate({ 'margin-left': '-=' + imageWidth }, 500);
      $('.image-size').attr('src', tn_array[imageCur]);
      if (imageCur === imagesLen - 1) {
        $('.fa-arrow-right').css('visibility', 'hidden');
      }
      if ($('.fa-arrow-left').css('visibility') === 'hidden') {
        $('.fa-arrow-left').css('visibility', 'visible');
      }
    }
    if (e === 'l') {
      $('.slider .slides').animate({ 'margin-right': '+=' + imageWidth }, 500);
      $('.image-size').attr('src', tn_array[imageCur]);
      if (imageCur === 0) {
        $('.fa-arrow-left').css('visibility', 'hidden');
      }
      if ($('.fa-arrow-right').css('visibility') === 'hidden') {
        $('.fa-arrow-right').css('visibility', 'visible');
      }
    }
  }

  $('.fa-arrow-right').click(function () {
    selectNext('r');
  })

  $('.fa-arrow-left').click(function () {
    selectNext('l');
  })

  $(document).keydown(function(e) {
    e.preventDefault();
    switch(e.which) {
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

  $('.slides li img').click(function () {
    $('#' + (imageCur + 1)).hide();
    var imgSrc = $(this).attr('src');
    var imgInd = $(this).parent('.slide').index();
    if (imgInd < imagesLen - bottomLen) {
      indexDif = imageCur;
      imageCur = imgInd;
      indexDif = Math.abs(indexDif - imageCur);
      $('.slider .slides').animate({ 'margin-left': '-=' + imageWidth * indexDif }, 500);
      $('image-size').attr('src', imgSrc);
    } else {
      imageCur = imgInd;
      $('.image-size').attr('src', imgSrc);
    }
    $('#' + (imageCur + 1)).show();
    $('.weblink').attr('href', 'https://www.' + websites[imageCur] + '.peterhwu.com');
    if (imgInd > 0) {
      if ($('.fa-arrow-left').css('visibility') === 'hidden') {
        $('.fa-arrow-left').css('visibility', 'visible');
      }
    }
    if (imgInd === 0) {
      if ($('.fa-arrow-left').css('visibility') === 'visible')
        $('.fa-arrow-left').css('visibility', 'hidden');
    }
    if (imgInd < imagesLen - 1) {
      if ($('.fa-arrow-right').css('visibility') === 'hidden')
        $('.fa-arrow-right').css('visibility', 'visible');
    }
    if (imgInd === imagesLen - 1) {
      if ($('.fa-arrow-right').css('visibility') === 'visible')
        $('.fa-arrow-right').css('visibility', 'hidden');
    }
    $('.slides').children().css('border-color', 'transparent');
    $(this).parent().css('border-color', 'red');
  })
})