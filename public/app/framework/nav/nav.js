app.directive('croutonNav', function () {

  //The main left navigation panel

  var controller = ['$scope', '$location', '$window', function ($scope,$location,$window) {
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

    $scope.nav = {};
    $scope.nav.desktop = false;
    $scope.nav.showNav = false;

    if (window.matchMedia('only screen and (max-width: 668px)').matches) {
      $scope.nav.desktop = false;
      $scope.nav.showNav = false;
    } else {
      $scope.nav.desktop = true
      $scope.nav.showNav = true;
    }

    //scroll code from: http://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
    $scope.nav.bottombarBottom = 0;
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    };
    function handleTouchEnd(evt) {
        xDown = null;
        yDown = null;
    };

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown || $scope.nav.showNav ) {
            return;
        }

        var yUp = evt.touches[0].clientY;

        var yDiff = yDown - yUp;

        if ( yDiff > 1 ) {
            /* up swipe */
            console.log(yDiff);
            if($scope.nav.bottombarBottom > -45){
              if(yDiff > 10){
                $scope.nav.bottombarBottom = -45;
              } else {
                $scope.nav.bottombarBottom = $scope.nav.bottombarBottom - yDiff;
              }
              $scope.$apply();
            }

        } else {
            /* down swipe */
            if($scope.nav.bottombarBottom < 0){
              if(yDiff < -10 || $scope.bottombarBottom - yDiff > 0){
                $scope.nav.bottombarBottom = 0;
              } else {
                $scope.nav.bottombarBottom = $scope.nav.bottombarBottom - yDiff;
              }
              $scope.$apply();
            }
        }

    };

  }];

  var template = '/app-render/framework/nav/nav.jade';

  return {
      restrict: 'E',
      controller: controller,
      templateUrl: template
  };
});
