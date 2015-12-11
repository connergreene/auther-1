'use strict';

app.controller('UserListCtrl', function ($scope, users, User, auth) {
	$scope.users = users;
	$scope.addUser = function () {
		$scope.userAdd.save()
		.then(function (user) {
			auth.signup(user);
			$scope.userAdd = new User();
			$scope.users.unshift(user);
		});
	};
	
	$scope.userSearch = new User();

	$scope.userAdd = new User();
});