var app = angular.module("myApp", ["ngRoute", "ui.router"]);
app.config(function($routeProvider, $locationProvider, $stateProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/", {
            templateUrl : "views/main.htm",
            controller : "mainCtrl"
        })
        .when("/london", {
            templateUrl : "views/london.htm",
            controller : "londonCtrl"
        })
        .when("/paris", {
            templateUrl : "views/paris.htm",
            controller : "parisCtrl"
        })
        .otherwise({
            template : "<h1>404</h1><p>Page does not exist</p>"
        });


//    $stateProvider
//        .state('/page-404',
//        {
//            url: "/page-404",
//            title: 'Not Found',
//            views: {
//                "fullscreen": {
//                    templateUrl: 'views/404.html'
//                }
//            }
//        })
//        .state('/home',
//        {
//            url: "/home",
//            title: 'Home',
//            views: {
//                "tester": {
//                    controller: 'RemoteLoginController',
//                    templateUrl: 'views/home.html'
//                }
//            },
//            controller: 'HomeController',
//            templateUrl: 'views/home.html'
//        });
});


app.controller("mainCtrl", function ($scope) {
    $scope.msg = "The main controller";
});


app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
});


app.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});