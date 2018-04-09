app.service('AuthService', ['ngResource', 'ngStorage'])
.factory('Auth', function($rootScope, $sessionStorage, $q){//$resource,

    /**
     *  User profile resource
     */
//    var Profile = $resource('/api/profile', {}, {
//        login: {
//            method: "POST",
//            isArray : false
//        }
//    });

    var auth = {};

    /**
     *  Saves the current user in the root scope
     *  Call this in the app run() method
     */
    auth.init = function(){
        if (auth.isLoggedIn()){
            $rootScope.user = auth.currentUser();
        }
    };

    auth.login = function(username, password){
        var deferObject = $q.defer();

        //Make real $http call

        //Fake $http call
        var mytimer = setTimeout(function(){
            clearTimeout(mytimer);

            var fakeResponse = {
                user: {
                    firstname: "Jason",
                    lastname: "Vega",
                    id: "1"
                }
            };

            $sessionStorage.user = fakeResponse.user;
            $rootScope.user = $sessionStorage.user;

            deferObject.resolve({
                status: 200,
                authorized: true
            });
        },3000);

        return deferObject.promise;
    };


    auth.logout = function() {
        delete $sessionStorage.user;
        delete $rootScope.user;
    };


    auth.checkPermissionForView = function(view) {
        return true;//TODO - uncomment

//        if (!view.requiresAuthentication) {
//            return true;
//        }
//
//        return userHasPermissionForView(view);
    };


    var userHasPermissionForView = function(view){
        if(!auth.isLoggedIn()){
            return false;
        }

        if(!view.permissions || !view.permissions.length){
            return true;
        }

        return auth.userHasPermission(view.permissions);
    };


    auth.userHasPermission = function(permissions){
        if(!auth.isLoggedIn()){
            return false;
        }

        var found = false;
        angular.forEach(permissions, function(permission, index){
            if ($sessionStorage.user.user_permissions.indexOf(permission) >= 0){
                found = true;
                return;
            }
        });

        return found;
    };


    auth.currentUser = function(){
        return $sessionStorage.user;
    };


    auth.isLoggedIn = function(){
        return $sessionStorage.user != null;
    };


    return auth;
});