(function() {
  'use strict';

  angular
    .module('metronome', ['ui.router'])
    .config(config);


  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('mainHome', {
      url: '/',
      views: {

        'mainHeader': {
          templateUrl: 'views/common/mainHeader/mainHeader.template.html',
          controller: 'mainHeaderController',
          controllerAs: 'mainHeaderCtrl'
        },

        'mainNav': {
          templateUrl: 'views/common/mainNav/mainNav.template.html'
        },

        'mainHome': {
          templateUrl: 'views/mainHome/mainHome.template.html',
          controller: 'mainHomeController',
          controllerAs: 'mainHomeCtrl'
        },

        'mainFooter': {
          templateUrl: 'views/common/mainFooter/mainFooter.template.html'
        }

      }
    });



  }

})();

// Old version
// (function() {
//   'use strict';
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
