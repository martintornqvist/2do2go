todoTogo.controller('createController', ['$scope', '$firebaseArray', '$location', '$firebaseObject', 'ngDialog', '$rootScope', '$routeParams',
      function($scope, $firebaseArray, $location, $firebaseObject, ngDialog, $rootScope, $routeParams){

        // Add items to list
        var addItems = new Firebase('https://todotogo.firebaseio.com/lists/' + random);

        // Start with empty array
        $scope.items = $firebaseArray(addItems);

        // Adds item to $scope
        $scope.addItem = function(){
            var timestamp = new Date().valueOf();
            $scope.items.$add({
                id: timestamp,
                name: $scope.itemInput,
                done: false
            });
            $scope.itemInput = '';
        },

        // Check if todoInput-field is empty, if not, run addItem function
        $scope.addPost = function(){
            if(event.keyCode == 13 && $scope.itemInput != ""){
                $scope.addItem();
            }
        },

        // Remove item from scope
        $scope.removeItem = function(index, item){
            if(item.id === undefined)
            return;
            $scope.items.$remove(item);
        },

        // Edit item in scope and save to Firebase
        $scope.editMode = function(){
          $(event.target).closest('li').toggleClass('editing');
        },
        $scope.editOnEnter = function(item){
          if(event.keyCode == 13 && item.name){
            $scope.editMode();
            $scope.items.$save(item);
          }
        };

        $scope.share = function(){

          //listUID = random;
          console.log('this is the short uid for the link: ' + random);
          var fb = new Firebase('https://todotogo.firebaseio.com/lists/' + random);
          console.log('this is the complete link: ' + fb);
          //console.log('this is the UID for the list: ' + listUID);
          console.log('this is the local link: file://localhost:3000/#/live/' + random);

        }
}]);
