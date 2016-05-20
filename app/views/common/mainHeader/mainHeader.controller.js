(function() {
  'use strick';

  angular
    .module('metronome')
    .controller('mainHeaderController', mainHeaderController);

  function mainHeaderController() {
    // variable name such as vm, which stands for ViewModel
    var vm = this;
    vm.title = 'Metronome';

  }

})();
