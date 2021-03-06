function UserController($scope) {
	var ctrl = this;
	ctrl.username = '';

	$scope.$watch(function() {
		return ctrl.username;
	}, function(newValue, oldValue) {
		console.log('Name has been updated!');
	});


	ctrl.country = {
		name: {

		}
	};

	$scope.$watch(function() {
		return ctrl.country;
	}, function(newValue, oldValue) {
		console.log('Country has been updated!');
	}, true);

	$scope.$watchCollection(function() {
		return ctrl.country.name;
	}, function(newValue, oldValue) {
		console.log('Country name has been updated!');
	});

}

angular
	.module('app')
	.controller('UserController', UserController);
