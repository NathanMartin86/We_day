(function(){
"use strict"
angular
  .module('user')
  .controller('UserController',function($scope,UserService){
    $scope.currentIndex = 1;
    $scope.setCurrentIndex = function(index){
      $scope.currentIndex = index;
      console.log($scope.currentIndex)
    }
    $scope.isCurrentIndex = function(index){
      if(index === $scope.currentIndex){
        return true;
      }else{
        return false;
      }
    };
    UserService.getDates().success(function(res){
      var localArray= [];
      localArray = res;
      console.log(localArray,'localArray')
      localArray.sort(function (a, b) {
        return a.start > b.start ? 1 : a.start < b.start ? -1 :0;
    });
    $scope.events = localArray;
  });
  $scope.formatDate = function(date){
    return moment(date).calendar()
  }

//story information////////////////////
  UserService.getStory().success(function(res){
    $scope.htmlVariable = res[0].storyContent;
    console.log('res story ',res[0]);
  });
//currentUser//////////////////
UserService.getCurrentUser().success(function(res){
  console.log('res currentUser',res);
  $scope.currentUserName = res.username;
});
//all users to wedding////////////
UserService.getUsers().success(function(res){
  $scope.guests = res;
  console.log('res users',res);
})
//carousel
  $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [
      {image:"http://cdn-media-2.lifehack.org/wp-content/files/2015/02/Wedding06-main.jpg"},
      {image:"http://www.doraliveband.com/docs/upload/w1.jpg"}
    ];
    $scope.currentIndex = 2;
    $scope.myValue = true;

  });
})();
