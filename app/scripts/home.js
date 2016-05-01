todoTogo.controller('homeController', ['$scope', '$firebaseArray', 'ngDialog', '$rootScope',
          function($scope, $firebaseArray, ngDialog, $rootScope){

            // Getting a Firebase reference
            allLists = new Firebase('https://todotogo.firebaseio.com/lists/');
            //oneList = new Firebase('https://todotogo.firebaseio.com');

            // Create function for the modal
            $scope.create = function(){
                    // Pushing a new list id to Firebase
                      lists = allLists.push({
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
}]);
