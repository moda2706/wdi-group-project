angular
  .module('qwertyApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;
  console.log(vm.user);
  vm.register = () => {
    console.log('Phase: 1');
    User
      .register(vm.user)
      .$promise
      .then(() => {
        console.log('Phase: 2');
        CurrentUserService.getUser();
        $state.go('usersIndex');
        console.log(vm.user);
      }, err => {
        console.log(err);
        console.log('Phase: 3');
      });
  };
}
