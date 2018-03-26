app.controller("state1Contrl", function ($scope, $http) {

    console.log('in state 1 cntrl');

    $scope.msg = "State 1 controller";

    $scope.testRequest = function(){
        console.log('in testrequest');


        $http.get("http://www.google.com")
            .then(
            function(response) {
                console.log(response);
            },
            function(err) {
                console.log(err);
            }
        );

    }
});