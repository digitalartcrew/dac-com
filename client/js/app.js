var app = angular.module("dacApp",['ngRoute','ngResource']);

app.config(function($routeProvider, $locationProvider, $httpProvider){
  $routeProvider.when('/', {
    controller: "PostsController",
    templateUrl: "templates/index.html"
  }).when('/posts/new', {
    controller: "NewPostController",
    templateUrl: "templates/new.html"
  }).when('/posts/:id', {
    controller: "PostController",
    templateUrl: "templates/show.html"
  }).when('/posts/:id/edit', {
    controller: "EditPostController",
    templateUrl: "templates/edit.html"
  }).otherwise({
    redirectTo:'/'
  });
  $locationProvider.html5Mode(true);
});
