angular.module("vehicles")
    .service("cartSvc", [function () {
        var cart = [];
        this.addVehicleToCart = function (vehicle) {
            cart.push(vehicle);
        };

        this.getVehiclesFromCart = function () {
            return cart;
        };
        this.removeVehicleFromCart = function (vehicle) {

        };


}]);
