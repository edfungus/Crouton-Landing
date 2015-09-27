app.directive('croutonContainer', function () {

  //The main content area on the right side of the nav bar

  var controller = ['$scope', '$location', function ($scope,$location) {
    console.log($location.path);
    $scope.home = true;
    $scope.pages = {};

  }];

  var template = '/app-render/framework/container/container.jade';

  return {
      restrict: 'E',
      controller: controller,
      templateUrl: template
  };
});
