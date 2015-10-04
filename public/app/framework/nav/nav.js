app.directive('croutonNav', function () {

  //The main left navigation panel

  var controller = ['$scope', '$location', '$window', 'desktopMobile', function ($scope,$location,$window,desktopMobile) {
    $scope.changePage = function(pageName){
      if(!$scope.nav.desktop){
        $scope.nav.showNav = false;
      }
      $location.path('/crouton/' + pageName).replace();
      window.scrollTo(0,0);
    }
    $scope.showNav = function(){
      $scope.nav.showNav = !$scope.nav.showNav;
    }
    $scope.overlayHit = function(){
      $scope.nav.showNav = false;
    }

    desktopMobile.detect();

    $scope.nav = {};
    $scope.nav.desktop = desktopMobile.isDesktop();
    $scope.nav.showNav = desktopMobile.isDesktop() ? true : false;

/*
    if (window.matchMedia('only screen and (max-width: 668px)').matches) {
      $scope.nav.desktop = false;
      $scope.nav.showNav = false;
    } else {
      $scope.nav.desktop = true
      $scope.nav.showNav = true;
    }
*/
  }];

  var template = '/app-render/framework/nav/nav.jade';

  return {
      restrict: 'E',
      controller: controller,
      templateUrl: template
  };
});
