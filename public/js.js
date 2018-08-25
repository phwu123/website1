$(document).ready(function () {
  var tn_array = $('.slides img').map(function () {
    return $(this).attr('src');
  }).get();
  $('.image-wrapper').attr('src', tn_array[0]);
  $('.prev').css('visibility', 'hidden');
  $('#2, #3').hide();
  $('#2, #3').css('display', 'none');

  var imagesLen = tn_array.length;
  var imageCur = 0;
  var imageWidth = 0;
  var bottomLen = 3;
  var indexDif;

  $('.next').click(function () {
    $('#' + (imageCur + 1)).hide();
    if (imageCur < tn_array.length) {
      imageCur += 1;
      $('#' + (imageCur + 1)).show();
      $('.slider .slides').animate({ 'margin-left': '-=' + imageWidth }, 500);
      $('.image-wrapper').attr('src', tn_array[imageCur]);

      if (imageCur === imagesLen - 1) {
        $('.next').css('visibility', 'hidden');
      }
      if ($('.prev').css('visibility') === 'hidden') {
        $('.prev').css('visibility', 'visible');
      }
    }
  })

  $('.prev').click(function () {
    $('#' + (imageCur + 1)).hide();
    if (imageCur > -1) {
      imageCur -= 1;
      $('#' + (imageCur + 1)).show();
      $('.slider .slides').animate({ 'margin-right': '+=' + imageWidth }, 500);
      $('.image-wrapper').attr('src', tn_array[imageCur]);
      if (imageCur === 0) {
        $('.prev').css('visibility', 'hidden');
      }
      if ($('.next').css('visibility') === 'hidden') {
        $('.next').css('visibility', 'visible');
      }
    }
  })

  $('.slides li img').click(function () {
    $('#' + (imageCur + 1)).hide();
    var imgSrc = $(this).attr('src');
    var imgInd = $(this).parent('.slide').index();
    if (imgInd <= imagesLen - bottomLen) {
      indexDif = imageCur;
      imageCur = imgInd;
      indexDif = Math.abs(indexDif - imageCur);
      $('.slider .slides').animate({ 'margin-left': '-=' + imageWidth * indexDif }, 500);
      $('image-wrapper').attr('src', imgSrc);
    } else {
      imageCur = imgInd;
      $('.image-wrapper').attr('src', imgSrc);
    }
    $('#' + (imageCur + 1)).show();
    if (imgInd > 0) {
      if ($('.prev').css('visibility') === 'hidden') {
        $('.prev').css('visibility', 'visible');
      }
    }
    if (imgInd === 0) {
      if ($('.prev').css('visibility') === 'visible') {
        $('.prev').css('visibility', 'hidden');
      } 
    }
    if (imgInd < imagesLen - 1) {
      if ($('.next').css('visibility') === 'hidden') {
        $('.next').css('visibility', 'visible');
      }
    }
    if (imgInd === imagesLen - 1) {
      if ($('.next').css('visibility') === 'visible') {
        $('.next').css('visibility', 'hidden');
      }
    }
  })
})