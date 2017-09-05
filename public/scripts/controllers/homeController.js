'use strict';

var app = app || {};

(function(module) {

  const homeController = {};

  app.Project.fetchAll(app.portfolioView.initIndexPage);

  homeController.init = function() {
    $('.tab-content').hide();
    $('main > section').show();

    $('footer').show();
    $('#projects li').hide();

  }

  module.homeController = homeController;

})(app);
