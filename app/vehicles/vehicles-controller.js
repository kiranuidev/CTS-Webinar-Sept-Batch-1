angular.module("vehicles")
    .controller("vehiclesCtrl", ["$scope", "vehicleSvc", "cartSvc","$rootScope",function($scope, vehicleSvc, cartSvc,                      $rootScope) {
            $scope.vehicleCount = 5;
            $scope.orderByYear = "Year";
           // $scope.vehicles = vehicleSvc.getVehicleList();
           vehicleSvc.getVehicleList()
           .then(function(response){
               $scope.vehicles=response.data.vehicles;
           })
           .catch(function(response){
               $scope.showAlert=true; 
           });

            $scope.showMoreVehicles = function () {
                $scope.vehicleCount += 5;
            };
            $scope.sortByYear = function () {
                $scope.orderByYear = $scope.orderByYear == "Year" ?
                    "-Year" : "Year";
            };
            $scope.addToCart = function (vehicle) {
               
        $rootScope.$broadcast("AddedVehicle",{cost:vehicle.Price});
                cartSvc.addVehicleToCart(vehicle);
            };
 }]);
