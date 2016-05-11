// Config for routing
todoTogo.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider

  // Route for landing page
  .when('/home', {
    templateUrl: './home.html',
    controller: 'homeController'
  })

  .when('/home/:random', {
    templateUrl: './create.html',
    controller: 'liveController'
  })

  // Route for FAQ page
  .when('/faq', {
    templateUrl: './faq.html'
  })

  // Route for create page
  .when('/create', {
    templateUrl: './create.html',
    controller: 'createController'
  })

  // Route for live view
  .when('/live/:random', {
    templateUrl: './live.html',
    controller: 'liveController'
  })

  .otherwise({ redirectTo: '/home' });

}]);
