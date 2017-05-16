angular
.module('qwertyApp')
.controller('ShowIndexCtrl', ShowIndexCtrl)
.directive('keypressEvents', KeyPressDirective);

function KeyPressDirective($document, $rootScope) {
  return {
    restrict: 'A',
    link: function () {
      $document.bind('keypress', function (e) {
        $rootScope.$broadcast('keypress', e, String.fromCharCode(e.which));
      });
    }
  };
}

ShowIndexCtrl.$inject = ['Level', '$stateParams', '$scope', '$rootScope', 'TokenService', 'User'];

function ShowIndexCtrl(Level, $stateParams, $scope, $rootScope, TokenService, User) {

  const vm = this;
  vm.level = Level.get($stateParams);

  // Preventing TAB
  $(document).keydown(function(objEvent) {
    if (objEvent.keyCode === 9) {  //tab pressed
      objEvent.preventDefault(); // stops its action
    }
  });

  // Getting our Level Data
  Level.get({ id: $stateParams.id}).$promise.then(data => {
    vm.level = data;

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

  // function which runs each time user enters a character
  $scope.output = function() {

    var spanClass;
    const inputText = $scope.textInput;
    const charIndex = inputText.length-1;
    const originalText = vm.level.content.substring(0,$scope.textInput.length);


    // Checking input for mistakes
    if (originalText[charIndex] === inputText[charIndex]) {
      // So far the input text is correct. Check for win condition:
      spanClass = 'correct';

      if(inputText === vm.level.content) {
        // User wins!
        alert('You won!');
        // Saving data
        userCompletedLevel();
      }

    } else {
      spanClass = 'wrong';
    }

    const allSpans = $scope.$textSource.find('span');
    const currentSpan = allSpans.eq([charIndex]);

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

        console.log(`Level id is ${vm.level._id}`);

        Level
        .get({ id: vm.level._id})
        .$promise
        .then(level => {
          vm.level = level;
          vm.level.plays.push(progress);
        });


        Level.update({ id: vm.level._id}, vm.level);

        const progress = {
          user: vm.level._id,
          score: 42,
          wpm: 65,
          secondsLeft: 12
        };

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

// Function which wraps each char into a span
function splitIntoSpans(text) {
  return text.split('').map(function(n) {
    return '<span>' + n + '</span>';
  }).join('');
}
