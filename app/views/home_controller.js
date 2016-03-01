  angular.module('metronome').controller('homeController', function($scope,
    $timeout, homeService) {

    //Bonne pratique de pré déclaration des fonctions.
    $scope.startStop = homeService.startStop;
    $scope.config = homeService.config;

    console.log(homeService);

    $scope.title = 'Metronome';

  });
