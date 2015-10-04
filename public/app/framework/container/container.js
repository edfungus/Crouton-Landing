app.directive('croutonContainer', function () {

  //The main content area on the right side of the nav bar

  var controller = ['$scope', '$location', 'desktopMobile', function ($scope,$location,desktopMobile) {
    $scope.currentPage;
    $scope.location = $location;
    $scope.nav = {};
    $scope.nav.desktop = desktopMobile.isDesktop();

    //if location is '' or '/' or '/crouton', go home
    var locationArray = $location.path().split('/');
    if(locationArray.length <= 2){
      $location.path('/crouton/home').replace();
    }

  }];

  var template = '/app-render/framework/container/container.jade';

  return {
      restrict: 'E',
      controller: controller,
      templateUrl: template
  };
});
