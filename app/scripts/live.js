todoTogo.controller('liveController', ['$scope', '$firebaseArray', '$location', '$firebaseObject', 'ngDialog', '$rootScope', '$routeParams',
      function($scope, $firebaseArray, $rootScope, $location, $firebaseObject, ngDialog, $routeParams){
        var ref = new Firebase('https://todotogo.firebaseio.com');
        // Showing all lists that user created, display better!!!
        // TEMP TO SEE IF IT WORKS
        var allLists = new Firebase('https://todotogo.firebaseio.com/lists/' + $routeParams.random);
        $scope.listCounter = $firebaseArray(allLists);

        // Function for adding new items to parent list at Firebase
        // Add items to list
        // TEMP TO SEE IF IT WORKS
        var addItems = new Firebase('//todotogo.firebaseio.com/lists/' + $routeParams.random);

        // Start with empty array
        $scope.items = $firebaseArray(addItems);

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
}]);
