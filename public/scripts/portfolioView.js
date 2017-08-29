'use strict';

var portfolioView = {};

// portfolioView.handleMainNav = function() {
//   $('#main-nav').on('click', '.tab', function() {
//
//     if ($(this).data('content') === 'showcase') {
//       $('.tab-content').fadeIn();
//     } else {
//       $('.tab-content').hide();
//       $('#' + $(this).data('content')).fadeIn();
//     }
//
//   });
//   $('#main-nav').click();
// };

portfolioView.initIndexPage = function() {
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });

  // portfolioView.handleMainNav();

};
