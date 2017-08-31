'use strict';

var app = app || {};

(function(module) {

  function Project(rawDataObj) {
    this.title = rawDataObj.title;
    this.body = rawDataObj.body;
    this.projectImg = rawDataObj.projectImg;
  }


  Project.all = [];

  Project.prototype.toHtml = function() {

    var template = Handlebars.compile($('#project-template').text());

    return template(this);

  };


  Project.loadAll = function(rawData) {

    rawData.forEach(function(ele) {
      Project.all.push(new Project(ele));
    });
  };


  Project.fetchAll = function() {
    if (localStorage.rawData) {

      Project.loadAll(JSON.parse(localStorage.rawData));

      app.portfolioView.initIndexPage();

    } else {

      $.getJSON('data/projectsData.json').then(function(data) {

        localStorage.setItem('rawData', JSON.stringify(data));
        Project.loadAll(JSON.parse(localStorage.rawData));
        app.portfolioView.initIndexPage();
      });

    }
  };

  module.Project = Project;

})(app);
