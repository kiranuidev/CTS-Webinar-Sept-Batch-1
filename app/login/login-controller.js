angular.module("login")
    .controller("loginCtrl", ["$scope", function ($scope) {
        var vm = this;
        var myData = "kiran";
        $scope.userName = "xxx";
        vm.userDetails = {

        };
        vm.login = function () {
            console.log(vm.userDetails);
        };
        $scope.$watch("userName", function (newVal, oldVal) {
            console.log(newVal);
            console.log(oldVal);
        });
        
        setTimeout(function(){
            $scope.userName="New User";
            //$scope.$apply();
        },1000)
}]);
