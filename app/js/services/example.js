function ExampleService($http) {
    'ngInject';

    const service = {};

    service.getUsers = function() {
        return $http.get('https://api.github.com/users')
    };

    service.getUsersInfo = function(id) {
        return $http.get('https://api.github.com/users/' + id)
    };

    return service;

}

export default {
    name: 'ExampleService',
    fn: ExampleService
};