var app = angular.module("dacApp");

app.controller("PostsController", ['$scope', '$location', 'PostService', function($scope, $location, PostService){

  $scope.posts = PostService.query();

  $scope.deletePost = function(post){
    post.$delete(function(post){
      $scope.posts.splice($scope.posts.indexOf(post),1);
    });
  };
}]);

app.controller("NewPostController", ['$scope', '$location', 'PostService', function($scope, $location, PostService){
  $scope.createPost = function(post){
    PostService.save(post, function(){
      $location.path('/');
    });
  };
}]);

app.controller("PostController", ['$scope', '$location', '$routeParams', 'PostService', function($scope, $location, $routeParams, PostService){
  PostService.get({id: $routeParams.id}, function(post){
    $scope.post = post;
  }, function(err){
    $location.path('/');
  });
}]);

app.controller('NavbarController', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });


app.controller("EditPostController", ['$scope', '$location', '$routeParams', 'PostService', function($scope, $location, $routeParams, PostService){
  PostService.get({id: $routeParams.id},function(post){
    $scope.post = post;
  }, function(err){
    $location.path('/');
  });
  $scope.editPost = function(post){
  	console.log("This is working!");
    $scope.post.$update(function(){
      $location.path('/');
    });
  };
}]);
