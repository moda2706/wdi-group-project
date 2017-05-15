angular
.module('qwertyApp')
.controller('ShowIndexCtrl', ShowIndexCtrl);

ShowIndexCtrl.$inject = ['Level', '$stateParams', '$scope'];

function ShowIndexCtrl(Level, $stateParams, $scope) {

  const vm = this;
  vm.text = 'test test test';
  vm.level = Level.get($stateParams);
  console.log($stateParams);

  Level.get({ id: $stateParams.id}).$promise.then(data => {
    vm.level = data;
    console.log('Level is ');
    console.log(vm.level.content);
    console.log('hi');
  });



  $scope.output = function() {


    const charIndex = $scope.textInput.length;
    const originalText = vm.level.content.substring(0,charIndex);
    const inputText = $scope.textInput;

    console.log(inputText);

    // Checking code for mistakes
    if (originalText === inputText) {
      console.log('Correct');
      // So far the input text is correct. Check for win condition:
      $scope.$textInput = $('#textInput').css({
        color: 'green'
      });

      if(inputText.length === vm.level.content.length) {
        // User wins!
        console.log('Win!');
      }
    } else {
      console.log('Incorrect');
      $scope.$textInput = $('#textInput').css({
        color: 'red'
      });
    }
  };

}
