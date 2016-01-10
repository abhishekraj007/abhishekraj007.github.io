
var app = angular.module("wikiApp", []);

app.controller('WikiCtrl', function($scope, $http){
  
  // selecting input field
  var input = $('input');
  
  // $scope.results = [];
  
  $scope.search = function(){
    $scope.results = [];
    var keyword = input.val();
    var api= "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+keyword+"&callback=JSON_CALLBACK";
    
    $http.jsonp(api)
    .success(function(response){
        var result = response.query.pages;
      // console.log(result);
        angular.forEach(result, function(value, key){
          $scope.results.push({'pages': value});
          // console.log($scope.results);
        })
          
    });    
  }
  
});
