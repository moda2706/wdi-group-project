angular
.module('qwertyApp')
.controller('LevelIndexCtrl', LevelIndexCtrl);

LevelIndexCtrl.$inject = ['Level'];

function LevelIndexCtrl(Level) {

  const vm = this;
  vm.all = Level.query();
  // vm.test = 'hello Mr Test';
}
