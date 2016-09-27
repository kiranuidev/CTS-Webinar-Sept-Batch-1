angular.module("components")
.directive("ctsAlphabetsOnly",[function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            console.log(scope);
            console.log(element);
            console.log(attrs);
           console.log("hey i am the link function;"); 
        }
    }
}]);