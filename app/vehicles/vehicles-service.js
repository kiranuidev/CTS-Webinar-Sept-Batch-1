angular.module("vehicles")
    .service("vehicleSvc", ["apiService", "$q", function (apiService, $q) {
        var res;

        this.getVehicleList = function () {
            //Step 1 create the deferred Object
            var dfd = $q.defer();

            if (res) {
                dfd.resolve(res);
            } else {
                apiService.apiGet("vehicles.json")
                    .then(function (response) {
                        res = response;
                        dfd.resolve(res)

                    }).catch(function (response) {
                        dfd.reject(response);
                    });
            }

            return dfd.promise;

            /*  return $http.get("app/api/vehicles.json");*/
        };
}]);
