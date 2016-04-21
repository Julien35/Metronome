(function() {
  'use strick';

  angular
    .module('metronome')
    .config(config);

  function config($routeProvider,
    $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        // delete ng-controller="homeController as homeCtrl" in home.html if use
        controller: 'homeController',
        controllerAs: 'homeCtrl'
      });

  }

})();
