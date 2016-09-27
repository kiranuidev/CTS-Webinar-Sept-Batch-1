angular.module("lookup")
    .factory("lookupFact", ["apiService", "$q", function (apiService, $q) {
            var countries;
            return {
                getCountries: function () {
                    var dfd = $q.defer();
                    apiService.apiGet("app/api/countries.json")
                        .then(function (response) {
                            dfd.resolve(response);
                        }).catch(function (response) {
                            dfd.reject(response);
                        });


                    return dfd.promise;
                }
            }
}]);
