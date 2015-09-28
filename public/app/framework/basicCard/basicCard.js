app.directive('croutonBasicCard', function () {

  //The basic html content card that pulls in content from jade snippet

  var templateBase = '/app-render/snippets/'

  var controller = ['$scope', function ($scope) {
    $scope.template = templateBase + $scope.snippetName + '.jade';
  }];

  return {
      restrict: 'E',
      scope: {
        snippetName: '@'
      },
      controller: controller,
      template: '<div class="cardInner" ng-include src="template"></div>'
  };
});
