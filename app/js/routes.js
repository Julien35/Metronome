(function() {
  'use strick';

  angular
    .module('metronome', ['ui.router'])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      views: {

        'header': {
          templateUrl: 'views/assets/header.html'
        },

        'nav': {
          templateUrl: 'views/assets/nav.html'
        },

        'home': {
          templateUrl: 'views/home.html',
          controller: 'homeController',
          controllerAs: 'homeCtrl'
        },

        'footer': {
          templateUrl: 'views/assets/footer.html'
        }

      }
    });



  }

})();

// Old version
// (function() {
//   'use strick';
//
//   angular
//     .module('metronome')
//     .config(config);
//
//   function config($routeProvider,
//     $locationProvider) {
//
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/home.html',
//         // delete ng-controller="homeController as homeCtrl" in home.html if use
//         controller: 'homeController',
//         controllerAs: 'homeCtrl'
//       });
//
//   }
//
// })();
