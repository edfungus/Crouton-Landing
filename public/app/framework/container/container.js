app.directive('croutonContainer', function () {

  //The main content area on the right side of the nav bar

  var controller = ['$scope', '$rootScope', function ($scope,$rootScope) {

  }];

  var template = '/app-render/framework/container/container.jade';

  return {
      restrict: 'E',
      controller: controller,
      templateUrl: template
  };
});
