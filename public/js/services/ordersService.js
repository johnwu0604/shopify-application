/**
 * Created by JohnWu on 2016-12-14.
 */
angular.module('ordersService', []).factory('Orders', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/api/orders');
        }
    }
}]);
