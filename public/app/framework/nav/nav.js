app.directive('croutonNav', function () {

  //The main left navigation panel

  var controller = ['$scope', '$location', function ($scope,$location) {
    $scope.changePage = function(pageName){
      $location.path('/crouton/' + pageName).replace();
    }
  }];

  var template = '/app-render/framework/nav/nav.jade';

  return {
      restrict: 'E',
      controller: controller,
      templateUrl: template
  };
});
