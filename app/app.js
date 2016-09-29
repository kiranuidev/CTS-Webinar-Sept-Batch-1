angular.module("dealersApp", ["login", "vehicles", "register", "header",
  "ctsFilters",
  "lookup",
  "ui.bootstrap", "appValues",
  "main", "pascalprecht.translate", "components", "ui.router"
]);

angular.module("dealersApp")
.provider("demo",[function(){
    this.version ="1.0.0";
    
    this.$get= function(){
        return this.version;
    };
}]);
angular.module("dealersApp")
    .config(['$translateProvider', 
             "$stateProvider",
             "demoProvider",
    function ($translateProvider,
            $stateProvider,
               demoProvider) {
             console.log(demoProvider.version);

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
    .run(["demo",function (demo) {
        
        console.log("I am the main app run");
  }]);


