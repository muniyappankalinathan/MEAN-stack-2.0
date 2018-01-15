	// create the module and name it scotchApp
	var muniApp = angular.module('muniApp', ['ngRoute']);

	// configure our routes
	muniApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			//  route for the API-Service page
			.when('/api_service', {
				templateUrl : 'pages/api_service.html',
				controller  : 'apiServiceController'
			});
	});

	// create the controller and inject Angular's $scope
	muniApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	muniApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
		$scope.todoList = [{todoText:'Clean House', done:false}];
		
			$scope.todoAdd = function() {
				$scope.todoList.push({todoText:$scope.todoInput, done:false});
				$scope.todoInput = "";
			};
		
			$scope.remove = function() {
				var oldList = $scope.todoList;
				$scope.todoList = [];
				angular.forEach(oldList, function(x) {
					if (!x.done) $scope.todoList.push(x);
				});
			};
	});

	muniApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
$scope.hideAtFirst = false;

$scope.onChangeTw0 = function(myString){
$scope.removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
/* reverse removeChar for comparison*/
$scope.checkPalindrome = $scope.removeChar.split('').reverse().join('');

if($scope.removeChar === $scope.checkPalindrome){
	$scope.hideAtFirst = true;
	$scope.palStatus = 'Yes,It is a palindrom';
}else{
	$scope.hideAtFirst = true;
	$scope.palStatus = 'No,It is not a palindrom';	
}
};
		$scope.onChange = function(str){
            $scope.isMatch = str === str.split('').reverse().join(''); 
            $scope.palValue = str.split('').reverse().join('');
            if($scope.isMatch){
				$scope.hideAtFirst = true;
$scope.palStatus = 'Yes,It is a palindrom';
            }else{
				$scope.hideAtFirst = true;
$scope.palStatus = 'No,It is not a palindrom';
            }
        };

	});

	// API - Service call

	muniApp.directive('numberOnly', function () {
        return {
            restrict: 'EA',
            link: function (scope, elem, attr, ctrl) {
                elem.bind('keyup', function (e) {
                    var text = this.value;
                    this.value = text.replace(/[a-zA-Z]/g, '');
                });
            }
		};
	});

	muniApp.controller('apiServiceController', function($scope,$http) {
		$scope.message = 'Look! I am an about page.';
$scope.addRowAsyncAsJSON = function(valid,dataObject){	
	if(valid){
		var res = $http.post('/savecompany', dataObject);
		res.success(function(data, status, headers, config) {
		$scope.message = data;
		console.log(data, status, headers, config,'---->>>all');
		});
		res.error(function(data, status, headers, config) {
		alert( "failure message: " + JSON.stringify({data: data}));
		});		
	}	
};

$scope.getData = function(){	
$http.get('/SPA_app/save_company.json').success(function(data, status, headers, config) {
	  $scope.records = data.records;
	  $scope.shops = data.shops;
	  $scope.shopDetails = [];
	  angular.forEach($scope.shops, function (value) {
		angular.forEach(value, function (val) {
			angular.forEach(val, function (valuData) {
				if(valuData.id || valuData.name || valuData.price){
					$scope.shopDetails.push({
						id:valuData.id,
						name:valuData.name,
						price:valuData.price
					});
				}
			});
		});
	  });
    }).error(function(data, status, headers, config) {
      // log error
    });
};
$scope.getData();
	});
