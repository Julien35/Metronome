(function() {
  'use strick';

  angular.module('metronome').config(function($routeProvider,
    $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController',
      });

  });
  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
})();
