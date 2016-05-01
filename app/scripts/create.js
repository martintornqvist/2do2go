todoTogo.controller('createController', ['$scope', '$firebaseArray', '$location', '$firebaseObject', 'ngDialog', '$rootScope',
      function($scope, $firebaseArray, $location, $firebaseObject, ngDialog, $rootScope){

        // Add items to list
        var addItems = new Firebase('https://todotogo.firebaseio.com/lists/' + listUID);

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
          console.log('this is the short uid for the link: ' + random);
          listUID = random
          var fb = new Firebase('https://todotogo.firebaseio.com/lists/' + listUID);
          console.log('this is the complete link: ' + fb);
          //console.log('this is the UID for the list: ' + listUID);

        }
}]);


// https://todotogo.firebaseio.com/lists/-KGhqvLYXcIdYVTuNW2p
