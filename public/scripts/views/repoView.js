'use strict';

var app = app || {};

(function(module) {

  const repoView = {};

  const ui = function() {
    let $projects = $('#projects');

    $projects.find('ul').empty();
    $projects.show().siblings().hide();

  };

  const repoTemplate = $('#repo-template').html();
  const render = Handlebars.compile(repoTemplate);


  repoView.index = function() {

    ui();

    $('#projects').append(
      app.repos.with('name').map(render)
    );

  };

  module.repoView = repoView;

})(app);
