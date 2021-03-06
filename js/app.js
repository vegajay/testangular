var app = angular.module("myApp", ["ngRoute", "ui.router","ngStorage"]);
app.config(function($routeProvider, $locationProvider, $stateProvider) {
    $locationProvider.hashPrefix('');

//    $routeProvider
//        .when("/", {
//            templateUrl : "views/main.htm",
//            controller : "mainCtrl"
//        })
//        .otherwise({
//            template : "<h1>404</h1><p>Page does not exist</p>"
//        });



    $stateProvider
        .state('/404',
        {
            url: "/404",
            title: '404',
            views: {
                "fullscreen": {
                    templateUrl: 'views/404.html'
                }
            }
        })
        .state('/login',
        {
            url: "/login",
            title: 'Login',
            views: {
                "fullscreen": {
                    controller: "LoginCtrl",
                    templateUrl: 'views/login.html'
                }
            }
        })
        .state('/',
        {
            url: "/",
            title: 'Home',
            views: {
                "fullscreen": {
                    templateUrl: 'views/main.htm'
                }
            }
        })
        .state('/london',
        {
            url: "/london",
            title: 'London',
            views: {
                "fullscreen": {
                    templateUrl: 'views/london.htm'
                }
            }
        })
        .state('/paris',
        {
            url: "/paris",
            title: 'Paris',
            views: {
                "fullscreen": {
                    templateUrl: 'views/paris.htm'
                }
            }
        })
        .state('/test_state1',
        {
            url: "/test_state1",
            title: 'State 1',
            views: {
                "fullscreen": {
                    controller: 'state1Contrl',
                    templateUrl: 'views/test_state1.html'
                }
            }
        })
        .state('/test_state2',
        {
            url: "/test_state2",
            title: 'State 2',
            views: {
                "fullscreen": {
                    templateUrl: 'views/test_state2.html'
                }
            }
        })
        .state('/test_state3',
        {
            url: "/test_state3",
            title: 'State 3',
            views: {
                "fullscreen": {
                    templateUrl: 'views/test_state3.html'
                }
            }
        })
        .state("otherwise", {
            url: "*path",
            templateUrl: "views/404.html"
        });
});






app.run(function($rootScope, $location, $state, $transitions, $window, Auth) {

    Auth.init();

    $transitions.onSuccess({}, function(transition) {

        //Check Auth
        if (!Auth.checkPermissionForView()){
            event.preventDefault();
            $state.go("/login");
        }

        //Make Title
        if (transition.to().title) {
            $window.document.title = transition.to().title;
        }

        //Route 404
        if (transition.to().name === 'otherwise') {
            $state.go('/404');
        }

    });






    console.log($rootScope.user);

//    $transitions.onError({}, function(transition) {

//    });
//    $transitions.onBefore({}, function(transition) {

//    });
//    $transitions.onStart({}, function(transition) {

//    });
});









/**
 * CONTROLLERS
 */

app.controller("mainCtrl", function ($scope) {
    $scope.msg = "The main controller";
});


app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I like London";
});


app.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});