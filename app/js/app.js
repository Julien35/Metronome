//fonction annonyme autoexécutée
(function() {
  'use strick';

  angular.module('metronome', [])

  .controller('main', function($scope, $timeout) {
    $scope.title = 'Metronome';
    $scope.son = 'audio/son.ogg';
    $scope.tempo = 4; //nombre de pulsation par seconde
    $scope.playing = false;

    //Bonne pratique de pré déclaration des fonctions.
    $scope.startStop = startStop;

    var player = document.getElementById('player');

    player.stop = function() {
      player.pause();
      player.currentTime = 0;
    };


    function startStop() {
      $scope.playing = !$scope.playing;
      if ($scope.playing) {
        playTempo();
      }
    }

    function playTempo() {
      $timeout(function() {
        player.stop();
        player.play();
        if ($scope.playing) {
          playTempo();
        }
      }, Math.round(1 / $scope.tempo * 1000));
    }

  });

})();
