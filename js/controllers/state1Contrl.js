app.controller("state1Contrl", function ($scope, $http, RequestService) {

    console.log('in state 1 cntrl');

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
        )
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
        )
    };
});