'use strict';

// var app = app || {};
//
// (function(module) {

  const projectsController = {};

  projectsController.init = function() {
    // $('.tab-content').hide();
    // $('#projects').show();

    $('#projects').show().siblings().hide();

    repos.requestRepos(repoView.index);

  }

//   module.projectsController = projectsController;
// })(app);
