todoTogo.controller('homeController', ['$scope', '$firebaseArray', 'ngDialog', '$rootScope', '$routeParams',
          function($scope, $firebaseArray, ngDialog, $rootScope, $routeParams){

            // Getting a Firebase reference
            allLists = new Firebase('https://todotogo.firebaseio.com/lists/');
            $scope.create = function(){
              // Generate a shorter random uid (6 chars) that replaces the long regular Firebase uid
              letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              uid_length = 6;
              generator = function(){
                random = '';
                for(var i = 0; i < uid_length; i++){
                  random += letters.charAt(Math.floor(Math.random() * letters.length));
                }
                return random;
              }
              generator();

              var lists = new Firebase('https://todotogo.firebaseio.com/lists/' + random);
              firebaseLists = $firebaseArray(lists);
              firebaseLists.$add(random).then(function(lists){});

              // Runs the ngDialog scheme with template etc
              ngDialog.open({
                template:'create.html',
                controller: 'createController',
                scope: $scope,
                className:'ngdialog-theme-default'
              });
              console.log('listUID is: ' + random);
            }

}]);
