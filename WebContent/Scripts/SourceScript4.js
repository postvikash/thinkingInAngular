
myApp = angular.module('myApp',['ngRoute']);
myApp.controller("FireAjax", function($scope, $http) {
		$http({
		      method: 'GET',
		      url: 'http://localhost:8000/resources/data/jsonData2'
		   }).then(function successCallback(response){
			   $scope.orgList = response.data.orgList;
		   },function errorCallback(error){
			   debugger;
			   alert("Error in the Ajax request"+error);
		   });
});
myApp.controller("MSController", function($scope){
	$scope.orgName = "Microsoft"
});
myApp.controller("AZController", function($scope){
	$scope.orgName = "Amazon"
});
myApp.controller("GController", function($scope){
	$scope.orgName = "Google"
});
myApp.controller("FBController", function($scope){
	$scope.orgName = "Facebook"
});
myApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
	   
		when('/', {
		   templateUrl: 'partials/index.html', controller: 'FireAjax'
		}).
		
		when('/amazon', {
	      templateUrl: 'partials/amazon.html', controller: 'AZController'
		}).
	   
		when('/microsoft', {
	      templateUrl: 'partials/microsoft.html', controller: 'MSController'
		}).
		
		when('/facebook', {
		      templateUrl: 'partials/facebook.html', controller: 'FBController'
		}).
		   
		when('/google', {
		      templateUrl: 'partials/google.html', controller: 'GController'
		}).
	   
		otherwise({
	      redirectTo: 'partials/index.html'
		});
}]);