angular.module("components")
    .directive("ctsCheckUser", [function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                var users = [{
                    name: "user1"
                }, {
                    name: "user2"
                }];
                element.bind("blur", function () {
                    console.log(this.value);
                    var isUserExists = _.find(users, {
                        name: this.value
                    });
                    if (!isUserExists) {
                        ctrl.$setValidity("usercheck", false);
                    } else {
                        ctrl.$setValidity("usercheck", true)
                    }
                    scope.$apply();
                    return true;

                });
            }
        }
}]);
//to build validation directives
// ngModel is required.
//
