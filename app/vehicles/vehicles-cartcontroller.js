angular.module("vehicles")
    .controller("cartCtrl", ["$scope", "cartSvc",
                                 function ($scope, cartSvc) {
            $scope.cartVehicles = cartSvc.getVehiclesFromCart();

 }]);
