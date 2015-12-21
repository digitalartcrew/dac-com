var app = angular.module("dacApp");

app.service("PostService",['$resource', function($resource){
	return $resource('/api/posts/:id', {id: '@_id'}, {
		update : {
			method: 'PUT'
		}
	});
}]);
		