//defining our angular app
var app = angular.module('Crouton', []);
app.config(function($locationProvider){
  $locationProvider.html5Mode(true);
})
