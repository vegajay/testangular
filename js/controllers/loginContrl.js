app.controller('LoginCtrl', function($rootScope, $scope, $location, Auth) {

    $scope.email = "";
    $scope.password = "";
    $scope.failed = false;

    $scope.login = function() {
        console.log('doing login');

        Auth.login($scope.email, $scope.password)
            .then(
            function(resp) {
                console.log(resp);
                console.log($rootScope.user);
                $location.path("/");
            },
            function(err) {
                console.log(err);
                $scope.failed = true;
            });
    };

});