//Controller Syntax
//                                   name          dependencies
angular.module("header").controller("headerCtrl", ["$scope", "$rootScope", "APP_VALUES", function ($scope, $rootScope, APP_VALUES) {
    $scope.heading = APP_VALUES.appName;
    var path = APP_VALUES.baseTemplatePath;
    $scope.template = path + "login.html";
    $scope.cartCount = 0;
    $scope.totalCost = 0;

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
    };
    $rootScope.$on("AddedVehicle", function (evt, args) {
        $scope.totalCost += args.cost;
        $scope.cartCount++;
    });
}]);
