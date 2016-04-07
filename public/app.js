var app = angular.module('myApp',[]);

app.controller('MainController', function($scope, $http){  

  $scope.giffy = {};

    $scope.getGif=function(){
    
    $http.get('http://api.giphy.com/v1/gifs/search?q=' + $scope.userInput + '&api_key=dc6zaTOxFJmzC').then(function(response){
      $scope.buttonClicked = true;
      $scope.giffy = response.data.data[getRandomInt(0,25)];
      console.log($scope.giffy);
    })
  }
})
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}