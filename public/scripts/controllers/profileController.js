'use strict';

var app = app || {};

(function(module) {

  const profileController = {};

  profileController.init = function() {
    $('.tab-content').hide();
    $('#profiles').show();

    $('footer').hide()
    
  }

  module.profileController = profileController;

})(app);
