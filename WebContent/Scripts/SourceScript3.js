
myApp = angular.module("myApp",[]);
var employees = [
                 {name : 'Vikash', org : 'Amazon'},
                 {name : 'Shubham', org : 'Intel'},
                 {name : 'Akshay', org : 'Cisco'},
                 {name : 'Nissan', org : 'Microsoft'}
                 ];
myApp.controller("SimpleController", function($scope) {
	$scope.employees = employees;
})