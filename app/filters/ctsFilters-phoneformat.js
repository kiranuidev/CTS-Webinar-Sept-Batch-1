angular.module("ctsFilters")
    .filter("phoneformat", [function () {
        return function (input, criteria1, criteria2) {
            var output = "";
            if (criteria1 == "US") {
                return usFormat(input, criteria2);
            } else if (criteria1 == "IN") {
                return indianFormat(input, criteria2);
            } else {
                return input;
            }

        };

        function usFormat(input, criteria) {
            var output = "";
            if (input.toString().length == 10) {
                var firstThree = input.toString().substring(0, 3);
                var secondThree = input.toString().substring(3, 6);
                var lastFour = input.toString().substring(6, 10);
                output = criteria + firstThree + "-" + secondThree + "-" + lastFour;
            };
            return output;
        }

        function indianFormat(input, criteria) {
            var output = "";
            if (input.toString().length == 10) {
                var firstFive = input.toString().substring(0, 5);
                var secondFive = input.toString().substring(5, 10);

                output = criteria + firstFive + "-" + secondFive;
            };
            return output;
        }
}]);
