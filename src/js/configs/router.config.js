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
    controller: 'LevelIndexCtrl as levelIndex'
  })
  .state('levelsShow', {
    url: '/levels/:id',
    templateUrl: '/js/views/levels/show.html',
    controller: 'ShowIndexCtrl as levelsShow'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  });

  $urlRouterProvider.otherwise('/');
}
