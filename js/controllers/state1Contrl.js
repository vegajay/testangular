app.controller("state1Contrl", function ($rootScope, $scope, $http, RequestService) {

    console.log('in state 1 cntrl');
    console.log($rootScope.user);

    $scope.msg = "State 1 controller";


    $scope.testGetRequest = function(){

        var payload = {
            url: 'https://jsonplaceholder.typicode.com/posts/1/comments',
            params: {

            }
        };


        RequestService.get(payload).then(
            function(resp){
                console.log(resp);
            },
            function(err){
                console.log(err);
            }
        );
    };

    $scope.testPostRequest = function(){

        var payload = {
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                testvar: "blablabla"
            }
        };


        RequestService.post(payload).then(
            function(resp){
                console.log(resp);
            },
            function(err){
                console.log(err);
            }
        );
    };

    $scope.testWPCall = function(){

        var payload = {
            //url: 'http://localhost/~jasonvega/campfyre-theme/wp-json/wp/v2/posts',
            url: 'http://localhost/~jasonvega/campfyre-theme/wp-json/wp/v2/categories',
            params: {

            }
        };


        RequestService.get(payload).then(
            function(resp){
                console.log(resp);
            },
            function(err){
                console.log(err);
            }
        );
    };
});