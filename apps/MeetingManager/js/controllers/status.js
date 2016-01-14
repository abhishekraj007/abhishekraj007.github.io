myApp.controller('StatusController', function($scope,$firebaseObject, $rootScope, 
	$firebaseAuth, FIREBASE_URL, Authentication,$location){

	var ref = new Firebase(FIREBASE_URL);
 	var authObj = $firebaseAuth(ref);

 	$scope.logout = function(){
		Authentication.logout();
		$location.path('/login');
	}

	authObj.$onAuth(function(authData){		
		if (authData) {
			// console.log("authData: "+authData);
			var ref = new Firebase(FIREBASE_URL).child('users').child(authData.uid);
			// console.log("ref:"+ ref);
			
			user = $firebaseObject(ref);
			
			user.$loaded().then(function(){
				$rootScope.currentUser = user;
				console.log("user: "+user);
			});
			// console.log("currentUser: "+$rootScope.currentUser);
			

	    //console.log("Logged in as:", authData.password.email);
	  } else {
	  	$rootScope.currentUser = null;
	    //console.log("Logged out");
	  }

	}); // onAuth

}); // StatusController