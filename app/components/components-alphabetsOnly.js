angular.module("components")
    .directive("ctsAlphabetsOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind('keypress', function (evt) {
                    console.log(evt.key);
                    var regex = new RegExp(/^[a-zA-Z\s]+$/);
                    if (!regex.test(evt.key)) {
                        evt.preventDefault();
                    }
                });
            }
        }
}]);

angular.module("components")
    .directive("ctsNumbersOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind('keypress', function (evt) {
                    console.log(evt.key);
                    var regex = new RegExp(/^[0-9]+$/);
                    if (!regex.test(evt.key)) {
                        evt.preventDefault();
                    }
                });
            }
        }
}]);
