angular
.module('qwertyApp')
.controller('LevelIndexCtrl', LevelIndexCtrl);

LevelIndexCtrl.$inject = ['LevelFactory'];

function LevelIndexCtrl(LevelFactory) {

  const vm = this;
  vm.levels = [];
  vm.test = 'hello';
  vm.levels = LevelFactory.query();
}
