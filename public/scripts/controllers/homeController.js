'use strict';

var app = app || {};

(function(module) {

  const homeController = {};

  app.Project.fetchAll(app.portfolioView.initIndexPage);

  homeController.init = function() {
    $('.tab-content').hide();
    $('main > section').show();

    $('footer').show()

  }

  module.homeController = homeController;

})(app);
