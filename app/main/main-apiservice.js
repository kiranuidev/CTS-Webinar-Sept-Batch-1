angular.module("main")
.service("apiService",["$http","$q",function($http,$q){
    
    this.apiGet=function(url){
        var dfd=$q.defer();
          $http.get(url)
          .then(function(response){
                            dfd.resolve(response);
          }).catch(function(response){
              dfd.reject(response);
          });
        
        
        return dfd.promise;
    };
    this.apiPost=function(url,data){
          var dfd=$q.defer();
          $http.post(url,data)
          .then(function(response){
                            dfd.resolve(response);
          }).catch(function(response){
              dfd.reject(response);
          });
        
        
        return dfd.promise;
    };
    this.apiPut=function(url,data){
       var dfd=$q.defer();
          $http.put(url,data)
          .then(function(response){
                            dfd.resolve(response);
          }).catch(function(response){
              dfd.reject(response);
          }); 
    };
    this.apiDelete=function(url,data){
        var dfd=$q.defer();
          $http.delete(url,data)
          .then(function(response){
                            dfd.resolve(response);
          }).catch(function(response){
              dfd.reject(response);
          });
    };
}]);