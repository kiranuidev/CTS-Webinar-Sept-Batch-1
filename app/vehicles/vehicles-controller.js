angular.module("vehicles")
    .controller("vehiclesCtrl", ["$scope", "vehicleSvc", "cartSvc",
                                 function ($scope, vehicleSvc, cartSvc) {
            $scope.vehicleCount = 5;
            $scope.orderByYear = "Year";
            $scope.vehicles = vehicleSvc.getVehicleList();

            $scope.showMoreVehicles = function () {
                $scope.vehicleCount += 5;
            };
            $scope.sortByYear = function () {
                $scope.orderByYear = $scope.orderByYear == "Year" ?
                    "-Year" : "Year";
            };
            $scope.addToCart = function (vehicle) {
                cartSvc.addVehicleToCart(vehicle);
            };
 }]);
