'use strict';

var app = app || {};

(function(module) {

  const portfolioView = {};

  portfolioView.initIndexPage = function() {

    app.Project.all.forEach(function(project) {
      $('#projects').append(project.toHtml());

    });

  };

  module.portfolioView = portfolioView;

})(app);


// Old jQuery way of handling the main nav

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

//    portfolioView.handleMainNav();
