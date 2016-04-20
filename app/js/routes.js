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
        controller: 'homeController',
        controllerAs: 'homeCtrl'
      });

  }

})();
