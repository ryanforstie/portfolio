'use strict';

// var app = app || {};
//
// (function(module) {

  const homeController = {};

  Project.fetchAll(portfolioView.initIndexPage);

  homeController.init = function() {
    $('.tab-content').hide();
    $('.tab-content').show();
  }

//   module.homeController = homeController;
// })(app);
