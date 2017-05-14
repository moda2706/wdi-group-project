angular
.module('qwertyApp')
.config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];
function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html'
    })
    .state('levelsIndex', {
      url: '/levels',
      templateUrl: '/js/views/levels/index.html',
      controller: 'LevelIndexCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
