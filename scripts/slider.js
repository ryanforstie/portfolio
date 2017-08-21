'use strict';

$(document).ready(function() {
  $('.next').on('click', function() {
    var nextImg = $('img.active').next('.slider-inner img');
    if (nextImg.length === 0) {
      nextImg = $('.slider-inner img:first');
    }
    $('img.active').removeClass('active');
    nextImg.addClass('active');
  });

  $('.prev').on('click', function() {
    var prevImg = $('img.active').prev('.slider-inner img');
    if (prevImg.length === 0) {
      prevImg = $('.slider-inner img:last');
    }
    $('img.active').removeClass('active');
    prevImg.addClass('active');
  });

});﻿


// $(document).ready(function() {
//   $('.next').on('click', function() {
//     console.log('clicked');
//     var currentImg = $('.active');
//     var nextImg = currentImg.next();
//
//     if (nextImg.length) {
//       currentImg.removeClass('active').css('z-index', -10);
//       nextImg.addClass('active').css('z-index', 10);
//     } else {
//         // nextImg = $('.slider-inner img:first');
//     }
//   });
//
//   $('.prev').on('click', function() {
//     var currentImg = $('.active');
//     var prevImg = currentImg.prev();
//
//     if (prevImg.length) {
//       currentImg.removeClass('active').css('z-index', -10);
//       prevImg.addClass('active').css('z-index', 10);
//     }
//   });
//
// });
