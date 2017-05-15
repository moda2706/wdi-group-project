angular
.module('qwertyApp')
.controller('LevelIndexCtrl', LevelIndexCtrl);

LevelIndexCtrl.$inject = ['Level'];

function LevelIndexCtrl(Level) {

  const vm = this;
  vm.all = [];
  vm.all = Level.query();
  console.log(vm.all);
  // vm.test = 'hello Mr Test';
}
