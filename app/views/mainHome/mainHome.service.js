(function() {
  'use strick';

  angular
    .module('metronome')
    .service('mainHomeService', mainHomeService);

  function mainHomeService($timeout, $http, $q) {

    // variable name such as vm, which stands for ViewModel
    var vm = this;
    vm.conf = [];
    vm.getConf = getConf;
    vm.player = document.getElementById('player');
    vm.playerStop = playerStop;
    vm.startStop = startStop;
    vm.playTempo = playTempo;

    var config = {
      IsPlaying: false,
      son: 'assets/audio/son.ogg',
      tempo: 4,
    };

    // getConf();
    // console.log(mainHomeConf.success);

    //Object service retourné dans mainHomeController
    var service = {
      startStop: startStop,
      config: config
    };
    return service;

    // functions
    function getConf() {
      return mainHomeConf.then(function(data) {
        vm.conf = data;
        console.log("data", data);
        // console.log("data.response.posts = ", data.response.posts);
      });
    }

    function playerStop() {
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
