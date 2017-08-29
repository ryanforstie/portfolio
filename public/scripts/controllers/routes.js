'use strict';

// var app = app || {};

page('/', homeController.init);
page('/projects', projectsController.init);
page('/profile', profileController.init);

page();
