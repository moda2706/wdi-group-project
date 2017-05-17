angular
.module('qwertyApp')
.factory('Level', Level);

Level.$inject = [
  '$resource',
  'API'
];

function Level($resource, API) {
  return $resource(`${API}/levels/:id`, { id: '@_id'}, {
    update: { method: 'PUT' }});
}
