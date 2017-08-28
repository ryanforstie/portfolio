'use strict';

// var projects = [];

function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.body = rawDataObj.body;
  this.projectImg = rawDataObj.projectImg;
}

Project.all = [];

Project.prototype.toHtml = function() {
  // var projectTemplate = $('#project-template').html();
  // var templateRender = Handlebars.compile(projectTemplate);

  var template = Handlebars.compile($('#project-template').text());

  return template(this);
  // return templateRender(this);
};

// rawData.forEach(function(projectObject) {
//   projects.push(new Project(projectObject));
// });
//
// projects.forEach(function(project) {
//   $('#projects').append(project.toHtml());
// });


Project.loadAll = function(rawData) {

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

Project.fetchAll = function() {
  if (localStorage.rawData) {

    Project.loadAll(JSON.parse(localStorage.rawData));

    portfolioView.initIndexPage();

  } else {

    $.getJSON('data/projectsData.json').then(function(data) {

      localStorage.setItem('rawData', JSON.stringify(data));
      Project.loadAll(JSON.parse(localStorage.rawData));
      portfolioView.initIndexPage();
    });

  }
};
