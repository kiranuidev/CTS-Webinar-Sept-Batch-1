//Controller Syntax
//                                   name          dependencies
angular.module("header").controller("headerCtrl", ["$scope", function ($scope) {

    var path = "app/templates/";
    $scope.template = path + "login.html";

    $scope.loadViews = function (viewName) {
        $scope.template = path + viewName + ".html";
    }
}]);
