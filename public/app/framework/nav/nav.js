app.directive('croutonNav', function () {

  //The main left navigation panel

  var controller = ['$scope', '$rootScope', function ($scope,$rootScope) {

  }];

  var template = '/app-render/framework/nav/nav.jade';

  return {
      restrict: 'E',
      controller: controller,
      templateUrl: template
  };
});
