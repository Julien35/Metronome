//fonction annonyme autoexécutée
(function() {
  'use strick';

  angular.module('metronome', [])

  .controller('main', function($scope) {
    $scope.title = 'Metronome';
  });

})();
