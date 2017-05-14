angular
  .module('qwertyApp')
  .factory('LevelFactory', LevelFactory);

LevelFactory.$inject = [
  '$resource'
];
function LevelFactory(
  $resource
) {
  return $resource('http://localhost:4000/api/levels/:id', { id: '@_id' });
}
