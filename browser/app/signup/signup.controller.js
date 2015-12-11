'use strict';

app.controller('signupCtrl', function ($scope, auth) {
	$scope.do = function(){
		//console.log($scope.email);
		//console.log($scope.password);
		auth.signup($scope.email, $scope.password)
	}
	
});