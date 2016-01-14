myApp.directive('confirmationNeeded', function(){
	// return object
	return {
		priority: 1,
		terminal: true,
		link: function(scope, element, attr){
			// msg store string that will be passed when using this directive
			var msg = attr.confirmationNeeded ||
			"Are you sure you want to delete?";
			
			var clickAction = attr.ngClick;
			element.bind('click', function(){

				if(window.confirm(msg)){
					scope.$eval(clickAction);
				}// confirm
			})// bind

		} // link

	}// return

}); // confirmatioNeeded