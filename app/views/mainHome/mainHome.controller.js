(function() {
  'use strick';

  angular
    .module('metronome')
    .controller('mainHomeController', mainHomeController);

  function mainHomeController($timeout, mainHomeService) {
    // variable name such as vm, which stands for ViewModel
    var vm = this;
    vm.title = 'Metronome';
    //Bonne pratique de pré déclaration des objets et fonctions.
    vm.startStop = mainHomeService.startStop;
    vm.config = mainHomeService.config;
    vm.tempoValue = mainHomeService.tempoValue;

  }
})();
