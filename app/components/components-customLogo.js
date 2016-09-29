angular.module("components")
    .directive('ctsCustomLogo', ["$compile", function ($compile) {
        return {
            template: "<h1>{{logoName}}</h1>",
            compile: function (element, attrs) {
                    console.log(element);
                    return {
                        pre: function (scope, element, attrs) {
                            console.log(element);
                        },
                        post: function (scope, element, attrs) {
                            scope.logoName = "CTS";
                            console.log(element);
                        }
                    }
                }
                /* link: function (scope, element, attrs) {
                     scope.logoName = "Cognizant";
                     scope.company = "CTS";
                     scope.errorMessage = "I don't serve";
                     var myLogo = "<h1>{{logoName}}</h1>"
                     if (scope.company == "CTS") {
                         myLogo = "<h1>{{logoName}}</h1>"
                     } else {
                         myLogo = "<h1>{{errorMessage}}<h1>"
                     }
                     console.log(myLogo);
                     console.log($compile(myLogo));
                     console.log($compile(myLogo)(scope));
                     var data = $compile(myLogo)(scope);

                     element.append(data);
                 }*/
        };
 }]);
