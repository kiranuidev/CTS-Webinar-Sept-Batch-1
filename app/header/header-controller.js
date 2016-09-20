//Controller Syntax
//                                   name          dependencies
angular.module("header").controller("headerCtrl", ["$scope", function ($scope) {
    $scope.heading = "Dealers App";
    var path = "app/templates/";
    $scope.template = path + "login.html";

    $scope.navItems = [{
            "displayName": "Home",
            "path": "home"
        },
        {
            "displayName": "Vehicles",
            "path": "vehicles"
        },
        {
            "displayName": "Login",
            "path": "login"
        },
        {
            "displayName": "Register",
            "path": "register"
        },
        {
            "displayName": "Cart",
            "path": "cart"
        }]
    $scope.loadViews = function (viewName) {
        $scope.template = path + viewName + ".html";
    }
}]);
