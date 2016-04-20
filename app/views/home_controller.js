(function() {
  'use strick';

  angular
    .module('metronome')
    .controller('homeController', homeController);

  function homeController($timeout, homeService) {
    // variable name such as vm, which stands for ViewModel
    var vm = this;
    vm.title = 'Metronome';
    //Bonne pratique de pré déclaration des fonctions.
    vm.startStop = homeService.startStop;
    vm.config = homeService.config;

    // console.log("homeService dans homeController = ", homeService);

  }

})();
