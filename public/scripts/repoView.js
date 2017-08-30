'use strict';

  const repoView = {};

  const ui = function() {
    let $projects = $('#projects'); // Best practice: Cache the DOM query if it's used more than once.

    $projects.find('ul').empty();
    $projects.show().siblings().hide();
  };

  const repoTemplate = $('#repo-template').html();
  const render = Handlebars.compile(repoTemplate);


  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#projects').append(
      repos.with('name').map(render)
    );
  };
