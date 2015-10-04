app.service("desktopMobile", function(){
  var device = {};

  this.detect = function(){
    if (window.matchMedia('only screen and (max-width: 668px)').matches) {
      device.desktop = false;
      device.mobile = true;
    } else {
      device.desktop = true;
      device.mobile = false;
    }
  }

  this.isMobile = function(){
    return device.mobile;
  }

  this.isDesktop = function(){
    return device.desktop;
  }

});
