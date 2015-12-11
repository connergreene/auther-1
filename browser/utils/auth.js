'use strict';

app.factory('auth', function ($http) {
	return {
		signup: function(email, password){
			//do something
			return $http({
				url: '/api/signup',
				method: 'POST',
				data: {email: email, password: password}
			}).then(function(response){
				console.dir(response);
				return response;
				
			}).then(null, function(err){
		      console.log(err);
			});
		},
		login: function(email, password){
			//do something else
			return $http({
				url: '/api/login',
				method: 'POST',
				data: {email: email, password: password}
			}).then(function(response){
				return response;
				
			}).then(null, function(err){
		      console.log(err);
			});
			

		}
	}
});


