angular.module("components")
    .directive("ctsDatePicker", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.datepicker();
            }
        }
}]);
