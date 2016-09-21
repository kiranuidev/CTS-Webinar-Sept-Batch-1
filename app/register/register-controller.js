angular.module("register")
.controller("registerCtrl",["lookupSvc",function(lookupSvc){
    var vm=this;
    //vm.countries=lookupSvc.getCountries();
    lookupSvc.getCountries()
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
}]);