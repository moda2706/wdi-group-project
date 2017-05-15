angular
.module('qwertyApp')
.controller('ShowIndexCtrl', ShowIndexCtrl);

ShowIndexCtrl.$inject = ['Level', '$stateParams'];

function ShowIndexCtrl(Level, $stateParams) {

  const vm = this;
  vm.text = 'test test test';
  vm.level = Level.get($stateParams);
  console.log($stateParams);

  Level.get({ id: $stateParams.id}).$promise.then(data => {
    vm.level = data;
    console.log('Level is ');
    console.log(vm.level);
    console.log('hi');
  });
  // console.log('Level is ');
  // console.log(vm.);

  // vm.test = 'hello Mr Test';
}
