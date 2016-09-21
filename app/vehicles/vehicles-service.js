angular.module("vehicles")
    .service("vehicleSvc", [ "$http",function ($http) {
        this.getVehicleList = function () {
            return $http.get("app/api/vehicles.json");
        };
}]);
