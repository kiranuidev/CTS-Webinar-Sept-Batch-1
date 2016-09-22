angular.module("lookup")
.service("lookupSvc",["apiService","$q",function(apiService,$q){
    var countries;
    this.getCountries =function(){
        var dfd=$q.defer();
        
        
    apiService.apiGet("app/api/countries.json")
        .then(function(response){
        dfd.resolve(response);
    }).catch(function(response){
        dfd.reject(response);
    });
      
        
        return dfd.promise;
        /*return $http.get("app/api/countries.json");*/
    };
}])