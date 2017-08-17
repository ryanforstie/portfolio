'use strict';

var portfolioView = {};

portfolioView.handleMainNav = function() {

  $('.main-nav .tab').on('click', function() {
    var $whereToGo = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + $whereToGo).fadeIn(1000);
  });

  $('.main-nav .tab:first').click();
};

$(document).ready(function() {
  portfolioView.handleMainNav();
});
