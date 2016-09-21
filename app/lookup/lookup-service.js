angular.module("lookup")
.service("lookupSvc",["$http",function($http){
    this.getCountries =function(){
        return $http.get("app/api/countries.json");
    };
}])