angular
.module('qwertyApp')
.controller('LevelIndexCtrl', LevelIndexCtrl);

LevelIndexCtrl.$inject = ['Level', 'CurrentUserService'];

function LevelIndexCtrl(Level, CurrentUserService) {

  CurrentUserService.getUser();


  const vm = this;
  vm.all = [];
  vm.all = Level.query();

}
