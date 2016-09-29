angular.module("components")
    .directive('ctsCompanyName', [function () {
        return {
            template: "Vehicle Dealers!!!",
            /*A-atrribute
              E-Element
              C-Class
              M-Commnet
            */
            restrict: "A,E,C,M"
        };
 }]);
