angular.module("components")
    .directive("ctsCustomClick", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind('click', function (evt) {
                    scope.$eval(attrs["ctsCustomClick"]);
                });
            }
        }
}]);
