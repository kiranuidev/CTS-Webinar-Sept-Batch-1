angular.module("appValues", []);

angular.module("appValues")
    .value("APP_VALUES", {
        "appName": "Vehicle Dealers",
        "Version": "1.0.0",
        "baseUrl": "app/api/",
        "baseImageUrl": "app/images",
        "baseTemplatePath": "app/templates/",
        "ErrorMessage": "Something Went Wrong. Please try later",
    });

angular.module("components")
    .directive("ctsAlphabetsOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind('keypress', function (evt) {
                    console.log(evt.key);
                    var regex = new RegExp(/^[a-zA-Z\s]+$/);
                    if (!regex.test(evt.key)) {
                        evt.preventDefault();
                    }
                });
            }
        }
}]);

angular.module("components")
    .directive("ctsNumbersOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind('keypress', function (evt) {
                    console.log(evt.key);
                    var regex = new RegExp(/^[0-9]+$/);
                    if (!regex.test(evt.key)) {
                        evt.preventDefault();
                    }
                });
            }
        }
}]);

angular.module("components")
    .directive("ctsCheckUser", [function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                var users = [{
                    name: "user1"
                }, {
                    name: "user2"
                }];
                element.bind("blur", function () {
                    console.log(this.value);
                    var isUserExists = _.find(users, {
                        name: this.value
                    });
                    if (!isUserExists) {
                        ctrl.$setValidity("usercheck", false);
                    } else {
                        ctrl.$setValidity("usercheck", true)
                    }
                    scope.$apply();
                    return true;

                });
            }
        }
}]);
//to build validation directives
// ngModel is required.
//

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

angular.module("components")
    .directive("ctsCustomClick", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind('click', function (evt) {
                    scope.$eval(attrs["ctsCustomClick"]);
                });
            }
        }
}]);

angular.module("components")
    .directive("ctsDatePicker", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.datepicker();
            }
        }
}]);

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

angular.module("components")
    .directive('ctsLoginPage', [function () {
        return {
            templateUrl: "app/templates/login.html"
        };
 }]);


angular.module("components")
    .directive('ctsTrans', [function () {
        return {
            template: "<ng-transclude></ng-transclude><h1>I am the</h1>",
            transclude: true
        };
 }]);

angular.module("components",[]);
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

angular.module("ctsFilters", []);

//Controller Syntax
//                                   name          dependencies

angular.module("header").controller("headerCtrl", ["$scope", "$rootScope", "APP_VALUES","$translate", function($scope, $rootScope, APP_VALUES,$translate) {
    $scope.heading = APP_VALUES.appName;
    var path = APP_VALUES.baseTemplatePath;


    $scope.template = path + "login.html";
    $scope.cartCount = 0;
    $scope.totalCost = 0;

    $scope.changeLanguage = function(name) {
        $translate.use(name);
    }
    $scope.navItems = [{
            "displayName": "Home",
            "path": "home"
        },
        {
            "displayName": "Vehicles",
            "path": "vehicles"
        },
        {
            "displayName": "Login",
            "path": "login"
        },
        {
            "displayName": "Register",
            "path": "register"
        },
        {
            "displayName": "Cart",
            "path": "cart"
        }
    ]
    /*$scope.loadViews = function(viewName) {
        $scope.template = path + viewName + ".html";
    };*/
    $rootScope.$on("AddedVehicle", function(evt, args) {
        $scope.totalCost += args.cost;
        $scope.cartCount++;
    });
}]);
angular.module("header", []);

angular.module("login")
    .controller("loginCtrl", ["$scope", function ($scope) {
        var vm = this;
        var myData = "kiran";
        $scope.userName = "xxx";
        vm.userDetails = {

        };
        vm.login = function () {
            console.log(vm.userDetails);
        };
        $scope.$watch("userName", function (newVal, oldVal) {
            console.log(newVal);
            console.log(oldVal);
        });
        
        setTimeout(function(){
            $scope.userName="New User";
            //$scope.$apply();
        },1000)
}]);

//creating login module
angular.module("login", []);

angular.module("lookup")
    .factory("lookupFact", ["apiService", "$q", function (apiService, $q) {
            var countries;
            return {
                getCountries: function () {
                    var dfd = $q.defer();
                    apiService.apiGet("countries.json")
                        .then(function (response) {
                            dfd.resolve(response);
                        }).catch(function (response) {
                            dfd.reject(response);
                        });


                    return dfd.promise;
                }
            }
}]);

angular.module("lookup")
    .service("lookupSvc", ["apiService", "$q", function(apiService, $q) {
        var countries;
        this.getCountries = function() {
            var dfd = $q.defer();

            apiService.apiGet("countries.json")
                .then(function(response) {
                    dfd.resolve(response);
                }).catch(function(response) {
                    dfd.reject(response);
                });


            return dfd.promise;
            /*return $http.get("app/api/countries.json");*/
        };
    }])
angular.module("lookup",[]);
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
                    }, 2000);

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

angular.module("main",[]);
angular.module("register")
.controller("registerCtrl",["lookupFact","$scope",function(lookupFact,$scope){
    var vm=this;
    //vm.countries=lookupSvc.getCountries();
    lookupFact.getCountries()
    .then(function(response){
       vm.countries=response.data.countries;
    })
    .catch(function(response){
       console.log(response); 
    });
    
    
    vm.user={};
    vm.register=function(){
        console.log(vm.user);
    };
    /* Date picker begins here*/
     $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[3];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
}]);
angular.module('register', []);
angular.module("register")
.config([function(){
    console.log("I am the register app");
}]);

angular.module("register")
.run([function(){
    console.log("I am the register app run");
}]);

angular.module("vehicles")
    .controller("cartCtrl", ["$scope", "cartSvc",
                                 function ($scope, cartSvc) {
            $scope.cartVehicles = cartSvc.getVehiclesFromCart();

 }]);

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

angular.module("vehicles")
    .controller("vehiclesCtrl", ["$scope", "vehicleSvc", "cartSvc","$rootScope","$state",function($scope, vehicleSvc, cartSvc,                      $rootScope,$state) {
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
       $scope.GoToCheckOut=function(){
           
         $state.go("index.cart")  
       };
 }]);

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

angular.module("vehicles", []);
angular.module("vehicles")
.config([function(){
    console.log("I am the vehicles app");
}]);
angular.module("vehicles")
.run([function(){
    console.log("I am the vehicles app run");
}]);

angular.module("dealersApp", ["login", "vehicles", "register", "header",
  "ctsFilters",
  "lookup",
  "ui.bootstrap", "appValues",
  "main", "pascalprecht.translate", "components", "ui.router"
]);


angular.module("dealersApp")
    .config(['$translateProvider', "$stateProvider",
    function ($translateProvider,
            $stateProvider) {

            var homeObj = {
                templateUrl: "app/templates/home.html"
            };
            var vehicleObj = {
                templateUrl: "app/templates/vehicles.html",
                controller:"vehiclesCtrl"
            };
            var loginObj = {
                templateUrl: "app/templates/login.html",
                controller:"loginCtrl as loginVM"
            };
            var cartObj = {
                templateUrl: "app/templates/cart.html",
                controller:"cartCtrl"
            };
             var registerObj = {
                templateUrl: "app/templates/register.html",
                 controller:"registerCtrl as vm"
            };


            $stateProvider.state('index', {
                url: "",
                views: {
                    "header": {
                        templateUrl: "app/templates/header.html",
                        controller:'headerCtrl'
                    },
                    "footer": {
                        template: "<hr>@kiran 2016"
                    }
                }
            })

               .state('index.home', homeObj)
                .state('index.vehicles', vehicleObj)
                .state('index.cart', cartObj)
                .state('index.login', loginObj)
                .state('index.register', registerObj);

            $translateProvider.translations('en', {
                "Home": "Home",
                "Vehicles": "Vehicles",
                "Login": "Login",
                "Register": "Register",
                "Cart": "Cart",
                "Basket": "Basket"
            });
            $translateProvider.translations('de', {
                "Home": "Zuhause",
                "Vehicles": "Fahrzeuge",
                "Login": "Anmeldung",
                "Register": "Neu registrieren",
                "Cart": "Karte",
                "Basket": "Korb"
            });
            console.log("I am the main app");
    }
  ]);

angular.module("dealersApp")
    .run([function () {
        console.log("I am the main app run");
  }]);
