(function() {
  'use strick';

  angular
    .module('metronome')
    .service('homeService', homeService);

  function homeService($timeout, $http, $q) {

    vm = this;

    var config = {
      IsPlaying: false,
      son: 'audio/son.ogg',
      tempo: 4,
    };

    var config2 = {};

    vm.config2 = getParam();
    // var config2 = getParam();
    console.log("config2 : ", config2);

    var player = document.getElementById('player');
    console.log("player : ", player);

    //Object service retourné dans homeController
    var service = {
      startStop: startStop,
      config: config
    };
    return service;

    // funtions
    // COMMENT SORTIR TEST DE LA FONCTION ALORS QUE successCallback EST EXECUTER APRES
    function getParam() {

      var defer = $q.defer();
      console.log(defer.promise.$$state);

      // Simple GET request example:
      $http({
        method: 'GET',
        url: 'views/paramHome.json',
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        // console.log("response", response);
        console.log("response.data", response.data);
        defer.resolve(response.data);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        // console.log("response", response);
        // console.log("response.data", response.data);
      });

      console.log("defer.promise : ", defer.promise);
      return vm.defer.promise;

    }


    function playerStop() {
      // getParam();
      player.pause();
      player.currentTime = 0;
    }

    function startStop() {
      config.IsPlaying = !config.IsPlaying;
      console.log('IsPlaying startStop', config.IsPlaying);
      if (config.IsPlaying) {
        playTempo();
      }
    }

    function playTempo() {
      $timeout(function() {
        playerStop();
        player.play();
        if (config.IsPlaying) {
          playTempo();
        }
      }, Math.round(1 / config.tempo * 1000));
      console.log('tempo', config.tempo);
    }

  }

})();
