angular
  .module('qwertyApp')
  .factory('Level', Level);

Level.$inject = [
  '$resource'
];
function Level(
  $resource
) {
  return $resource('http://localhost:4000/api/levels/:id', { id: '@_id' });
}
