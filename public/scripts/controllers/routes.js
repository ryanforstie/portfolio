'use strict';

var app = app || {};

page('/', app.homeController.init);
page('/projects', app.projectsController.init);
page('/profile', app.profileController.init);

page();
