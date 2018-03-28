app.service('RequestService', function ($q, $http) {

    this.get = function (payload) {

        var deferObject = $q.defer();

        $http(payload).then(
            function(resp){
                deferObject.resolve(resp);
            },
            function(err){
                deferObject.reject(err);
            }
        );

        return deferObject.promise;
    };

});