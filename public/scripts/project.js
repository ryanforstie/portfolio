'use strict'

var projects = [];

function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.body = rawDataObj.body;
  this.projectImg = rawDataObj.projectImg;
}

Project.prototype.toHtml = function() {
  var projectTemplate = $('#project-template').html();
  var templateRender = Handlebars.compile(projectTemplate);

  return templateRender(this);
}

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
