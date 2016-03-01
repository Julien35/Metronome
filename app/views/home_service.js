angular.module('metronome').service('homeService', function($timeout) {

  // new Object() === {}

  var config = {
    playing: false,
    son: 'audio/son.ogg',
    tempo: 4
  };

  //Object service retourné dans homeController
  var service = {
    startStop: startStop,
    config: config
  };

  var player = document.getElementById('player');
  console.log(player);

  player.stop = function() {
    player.pause();
    player.currentTime = 0;
  };

  function startStop() {
    config.playing = !config.playing;
    console.log('playing startStop', config.playing);
    if (config.playing) {
      playTempo();
    }
  }

  function playTempo() {
    $timeout(function() {
      player.stop();
      player.play();
      if (config.playing) {
        playTempo();
      }
    }, Math.round(1 / config.tempo * 1000));
    console.log('tempo', config.tempo);
  }

  return service;
});
