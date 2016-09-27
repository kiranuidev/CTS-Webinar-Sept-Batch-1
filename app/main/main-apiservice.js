angular.module("main")
    .service("apiService", ["$http", "$q", "APP_VALUES", "$uibModal", "$timeout", function ($http, $q, app_values, $uibModal, $timeout) {

        this.apiGet = function (url) {
            var modalInstance = $uibModal.open({
                //animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: app_values.baseTemplatePath + 'progressBar.html'

            });

            /* modalInstance.result.then(function (selectedItem) {
     $ctrl.selected = selectedItem;
 }, function () {
     $log.info('Modal dismissed at: ' + new Date());
 });*/

            var dfd = $q.defer();
            $http.get(app_values.baseUrl + url)
                .then(function (response) {

                    $timeout(function () {
                        modalInstance.close();
                        dfd.resolve(response);
                    }, 10000);

                }).catch(function (response) {
                    dfd.reject(response);
                });


            return dfd.promise;
        };
        this.apiPost = function (url, data) {
            var dfd = $q.defer();
            $http.post(url, data)
                .then(function (response) {
                    dfd.resolve(response);
                }).catch(function (response) {
                    dfd.reject(response);
                });


            return dfd.promise;
        };
        this.apiPut = function (url, data) {
            var dfd = $q.defer();
            $http.put(url, data)
                .then(function (response) {
                    dfd.resolve(response);
                }).catch(function (response) {
                    dfd.reject(response);
                });
        };
        this.apiDelete = function (url, data) {
            var dfd = $q.defer();
            $http.delete(url, data)
                .then(function (response) {
                    dfd.resolve(response);
                }).catch(function (response) {
                    dfd.reject(response);
                });
        };
    }]);
