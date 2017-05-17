angular
  .module('qwertyApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User'];

function UsersIndexCtrl(User){

  const vm = this;
  vm.users = User.query();



  console.log('Users: ');
  console.log(vm.users);

  function selectUser() {
    console.log(this);
  }

  vm.selectUser = selectUser;
}


// const decoded = TokenService.decodeToken();
//
// if (decoded) {
//   User
//   .get({ id: decoded.id }).$promise
//   .then(data => {
//
//     // Data is the user data
//     console.log(`User with id ${data._id} completed the level.`);
//
//   });
// }
