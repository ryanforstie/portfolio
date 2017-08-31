'use strict';

var app = app || {};

(function(module) {

  const projectsController = {};

  projectsController.init = function() {

    $('#projects').show().siblings().hide();
    // $('.tab-content').hide();
    // $('#projects').show();
    $('footer').hide()

    app.repos.requestRepos(app.repoView.index);

  }

  module.projectsController = projectsController;

})(app);
