(function () {
  "use strict";
  angular
    .module('user')
    .directive('myCarousel', function () {
      return {
        restrict: 'EA',
        transclude: true,
        templateUrl: 'app/user/views/user.carousel.directive.html',
        link: function (scope, element, attributes) {


        }
      };
    });

})();
