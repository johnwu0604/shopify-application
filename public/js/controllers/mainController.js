/**
 * Created by JohnWu on 2016-12-14.
 */
angular.module('mainController', [])

    .controller('orders', ['$scope', '$http', 'Orders', function($scope, $http, Orders)  {

        Orders.get().success(function(data) {

            var total = 0.0;
            for ( var i=0; i<data.orders.length; i++ ) {
                console.log(data.orders[i].total_price);
                total += parseFloat(data.orders[i].total_price);
            }

            $scope.orders = data.orders;
            $scope.totalRevenue = total.toFixed(2);
        });

    }]);
