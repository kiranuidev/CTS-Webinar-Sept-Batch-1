angular.module("login")
.controller("loginCtrl",[function(){
    var vm = this;
    var myData="kiran";
    vm.userDetails={
        
    };
    vm.login=function(){
      console.log(vm.userDetails);  
    };
}]);