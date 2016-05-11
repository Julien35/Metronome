(function() {
  'use strick';

  angular
    .module('metronome', ['ui.router'])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('body', {
      url: '/',
      views: {

        'header': {
          templateUrl: 'header/header.html'
        },

        'nav': {
          templateUrl: 'nav/nav.html'
        },

        'body': {
          templateUrl: 'body/body.html',
          controller: 'bodyController',
          controllerAs: 'bodyCtrl'
        },

        'footer': {
          templateUrl: 'footer/footer.html'
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
