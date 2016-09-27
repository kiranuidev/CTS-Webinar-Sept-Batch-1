angular.module("dealersApp", ["login", "vehicles", "register", "header", "ctsFilters",
    "lookup",
    "ui.bootstrap", "appValues",
    "main", "pascalprecht.translate", "components"
]);


angular.module("dealersApp")
    .config(['$translateProvider', function($translateProvider) {
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
    }]);

angular.module("dealersApp")
    .run([function() {
        console.log("I am the main app run");
    }]);