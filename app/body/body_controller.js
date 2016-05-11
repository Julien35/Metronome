(function() {
  'use strick';

  angular
    .module('metronome')
    .controller('bodyController', bodyController);

  function bodyController($timeout, bodyService) {
    // variable name such as vm, which stands for ViewModel
    var vm = this;
    vm.title = 'Metronome';
    //Bonne pratique de pré déclaration des fonctions.
    vm.startStop = bodyService.startStop;
    vm.config = bodyService.config;

    // console.log("bodyService dans bodyController = ", bodyService);

  }

})();
