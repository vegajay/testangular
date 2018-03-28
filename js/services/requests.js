app.service('RequestService', function ($q, $http) {

    this.get = function (payload) {

        var deferObject = $q.defer();

        payload.method = "GET";

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

    this.post = function (payload) {

        var deferObject = $q.defer();

        //payload.method = "POST";
        payload.config = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        $http.post(payload.url, payload.data, payload.config).then(
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