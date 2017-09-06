
myApp = angular.module("myApp",[]);
myApp.controller("SimpleController", function($scope) {
	$scope.jsObject = {};
	$scope.jsObject.message = "Learning AngularJS";
});

/*
 * HTML document is loaded into the browser, and evaluated by the browser. 
 * AngularJS JavaScript file is loaded, the angular global object is created. 
 * Next, JavaScript which registers controller functions is executed.
 * Next AngularJS scans through the HTML to look for AngularJS apps and views. 
 * Once view is located, it connects that view to the corresponding controller function.
 * Next, AngularJS executes the controller functions. 
 * It then renders the views with data from the model populated by the controller. 
 * The page is now ready.
 */
