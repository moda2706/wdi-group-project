angular
.module('qwertyApp')
.controller('ShowIndexCtrl', ShowIndexCtrl)
.directive('keypressEvents', KeyPressDirective);

function KeyPressDirective($document, $rootScope) {
  return {
    restrict: 'A',
    link: function () {
      console.log('linked');
      $document.bind('keypress', function (e) {
        $rootScope.$broadcast('keypress', e, String.fromCharCode(e.which));
      });
    }
  };
}

ShowIndexCtrl.$inject = ['Level', '$stateParams', '$scope', '$rootScope', 'TokenService', 'User'];

function ShowIndexCtrl(Level, $stateParams, $scope, $rootScope, TokenService, User) {

  const vm = this;
  vm.text = 'test test test';
  vm.level = Level.get($stateParams);
  console.log($stateParams);


  // Preventing TAB
  $(document).keydown(function(objEvent) {
    if (objEvent.keyCode === 9) {  //tab pressed
      objEvent.preventDefault(); // stops its action
    }
  });

  // Getting our Level Data
  Level.get({ id: $stateParams.id}).$promise.then(data => {
    vm.level = data;
    console.log('Level is ');
    console.log(vm.level.content);
    console.log('hi');
    // Wrapping original text into spans and setting it back to the DOM
    $scope.$textSource = $('#textSource').html(splitIntoSpans(vm.level.content));
    $scope.$textSource.find('span').eq(0).addClass('next');

    // $scope.$textInput.focus();
    //
    // $scope.$textInput.onblur = function () {
    //   setTimeout(function () {
    //     $scope.$textInput.focus();
    //   });
    // };
  });

  // Function which wraps each char into a span
  function splitIntoSpans(text) {
    return text.split('').map(function(n) {
      return '<span>' + n + '</span>';
    }).join('');
  }

  // function which runs each time user enters a character
  $scope.output = function() {

    const inputText = $scope.textInput;
    const charIndex = inputText.length-1;
    const originalText = vm.level.content.substring(0,$scope.textInput.length);

    console.log(inputText);
    var spanClass;

    // Checking input for mistakes
    if (originalText[charIndex] === inputText[charIndex]) {
      console.log('Correct');
      // So far the input text is correct. Check for win condition:
      $scope.$textInput = $('#textInput').css({
        color: 'green'
      });

      spanClass = 'correct';

      if(inputText === vm.level.content) {
        // User wins!
        alert('You won!');
        // Saving data
        userCompletedLevel();
      }

    } else {

      console.log('Incorrect');
      console.log(`Original text is ${originalText} and input text is ${inputText}`);
      $scope.$textInput = $('#textInput').css({
        color: 'red'
      });

      spanClass = 'wrong';
    }

    const allSpans = $scope.$textSource.find('span');
    const currentSpan = allSpans.eq([charIndex]);

    // Removing all classes from next spans
    // for (let i = vm.level.content.length-1; i > charIndex; i-- ) {
    //   console.log('Entered the loop');
    //   const nextSpan = allSpans.eq(i);
    //   nextSpan.removeClass();
    // }
    currentSpan.removeClass();
    if (inputText.length !== 0) {
      currentSpan.addClass(spanClass);
      currentSpan.nextAll().removeClass();
      currentSpan.next().addClass('next');
    } else {
      allSpans.removeClass();
      allSpans.eq(0).addClass('next');
    }




  };
  function userCompletedLevel() {
    console.log('User Completed Level');

    const decoded = TokenService.decodeToken();
    if (decoded) {
      User
      .get({ id: decoded.id }).$promise
      .then(data => {
        console.log(`User with id ${data._id} completed the level.`);

        // self.currentUser = data;
        // $rootScope.$broadcast('loggedIn');
      });
    }
  }
  // $scope.key = 'none';

  // Key Listener 0
  // $rootScope.$on('keypress', function (evt, obj, key) {
  //   $scope.$apply(function () {
  //
  //     if(evt.keyCode === 8) {
  //       console.log('Delete');
  //     }
  //     $scope.key = key;
  //     console.log($scope.key);
  //   });
  // });

  //function addKeyPressHandler() {

  //   $(document).on('keypress', function(event) {
  //
  //     var input = String.fromCharCode(event.charCode),
  //     isRight = input === currentLesson[counter],
  //     spanClass = isRight ? "right" : "wrong",
  //     allSpans = chars.find("span"),
  //     currentSpan = allSpans.eq(counter);
  //
  //     counter++;
  //     once || (once = true) && output.text("");
  //     allSpans.removeClass("underline");
  //     currentSpan.addClass(spanClass);
  //     currentSpan.next().addClass(" underline");
  //     output.text(output.text() + input);
  //     event.preventDefault();
  //   });
  // }

}
