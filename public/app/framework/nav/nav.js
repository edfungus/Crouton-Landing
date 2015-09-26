app.directive('croutonNav', function () {

  var controller = ['$scope', '$rootScope', function ($scope,$rootScope) {

  }];

  var template = '/app-render/framework/nav/nav.jade';

  return {
      restrict: 'EA',
      controller: controller,
      templateUrl: template
  };
});
