angular.module("components")
    .directive('ctsLoginPage', [function () {
        return {
            templateUrl: "app/templates/login.html"
        };
 }]);


angular.module("components")
    .directive('ctsTrans', [function () {
        return {
            template: "<ng-transclude></ng-transclude><h1>I am the</h1>",
            transclude: true
        };
 }]);
