angular
.module('qwertyApp')
.controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User', '$scope'];

function UsersIndexCtrl(User, $scope) {

  const vm = this;
  vm.users = User.query();


  console.log('Users: ');
  console.log(vm.users);

  function selectUser(id) {
    //  console.log(id);
    // Get user data on click
    User
    .get({ id: id }).$promise
    .then(data => {

      console.log('This user data: ');
      console.log(data);

      // Show user data on click:
      $scope.$profileName = $('#profileUsername').html(`${data.username}`);
      $scope.$profileScore = $('#profileScore').html(`${data.userScore.toFixed(0)} pts`);
      $scope.$profileProgress = $('#profileProgress').html(`<strong>${data.currentLevel} / 15</strong>`);
      $scope.$profileImage = $('#profileImage').attr('src',data.image);

      var largestScore;
      if (data.levelsScore.length !== 0) largestScore = Math.max.apply(Math, data.levelsScore);
      else largestScore = 0;

      largestScore = largestScore.toFixed(0);
      $scope.$profileLargestScore = $('#profileLargestScore').html(`<strong>${largestScore} pts</strong>`);

    });

  }

  vm.selectUser = selectUser;

  // function setProfileImage() {
  //   const decoded = TokenService.decodeToken();
  //
  //   if (decoded) {
  //     User
  //     .get({ id: decoded.id }).$promise
  //     .then(data => {
  //
  //       // Data is the user data
  //       return data.image;
  //
  //     });
  //   }
  //   return 'images/cat.png';
  // }
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
