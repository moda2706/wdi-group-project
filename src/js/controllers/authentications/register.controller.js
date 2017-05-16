angular
  .module('qwertyApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;
  console.log(vm.user);
  vm.register = () => {

    User
      .register(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
        $state.go('login');
        console.log(vm.user);
      }, err => {
        console.log(err);
      });
  };
}
