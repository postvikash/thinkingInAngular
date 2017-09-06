

myApp = angular.module("myApp",[]);
techBuzzWords = [];
myApp.controller('SimpleController', function($scope) {
	techBuzzWords.push({Technology : 'Java', BuzzWord : 'JIT Compiler'});
	techBuzzWords.push({Technology : 'AngularJS', BuzzWord : 'Dependency Injection'});
	$scope.data = techBuzzWords;
});