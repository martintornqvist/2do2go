todoTogo.controller('liveController', ['$scope', '$firebaseArray', '$location', '$firebaseObject', 'ngDialog', '$rootScope',
      function($scope, $firebaseArray, $rootScope, $location, $firebaseObject, ngDialog){
        var ref = new Firebase('https://todotogo.firebaseio.com');
        // Showing all lists that user created, display better!!!
        // TEMP TO SEE IF IT WORKS
        var allLists = new Firebase('https://todotogo.firebaseio.com/lists/-KGcz9liVqaiRy-_IukE');
        $scope.listCounter = $firebaseArray(allLists);

        // Function for adding new items to parent list at Firebase
        // Add items to list
        // TEMP TO SEE IF IT WORKS
        var addItems = new Firebase('https://todotogo.firebaseio.com/lists/-KGcz9liVqaiRy-_IukE');

        // Start with empty array
        $scope.items = $firebaseArray(addItems);


}]);
