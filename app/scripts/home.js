todoTogo.controller('homeController', ['$scope', '$firebaseArray', 'ngDialog', '$rootScope', '$routeParams',
          function($scope, $firebaseArray, ngDialog, $rootScope, $routeParams){

            // Getting a Firebase reference
            allLists = new Firebase('https://todotogo.firebaseio.com/lists/');
            //oneList = new Firebase('https://todotogo.firebaseio.com');

            // Create function for the modal
            $scope.createe = function(){
                    // Pushing a new list id to Firebase
                      allLists = allLists.push({
                      name: 'new list'
                    });
                      // Fetches the created list UID
                      listUID = lists.key();
                      $rootScope.listUID = new Firebase('https://todotogo.firebaseio.com/lists/' + listUID);

                      // Runs the ngDialog scheme with template etc
                      ngDialog.open({
                        template:'create.html',
                        controller: 'createController',
                        scope: $scope,
                        className:'ngdialog-theme-default'
                      });
                      console.log('listUID is: ' + listUID);
                    };









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

              lists.child(random).set(random);
              firebaseLists.$add(random).then(function(lists){
              })

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
