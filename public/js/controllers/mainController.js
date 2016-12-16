/**
 * Created by JohnWu on 2016-12-14.
 */
angular.module('mainController', [])

    .controller('orders', ['$scope', '$http', 'Orders', function($scope, $http, Orders)  {

        Orders.get().success(function(data) {

            var totalRevenue = 0.0;
            var totalLineItems = 0;
            var uniqueCities = [];
            var uniqueCustomers = [];

            for ( var i=0; i<data.orders.length; i++ ) {
                // get revenue from order
                totalRevenue += parseFloat(data.orders[i].total_price);
                // get quantity of items ordered
                for ( var j=0; j<data.orders[i].line_items.length; j++ ) {
                    totalLineItems += data.orders[i].line_items[j].quantity;
                }
                // get city of shipping address and add to list if it is unique
                if ( uniqueCities.indexOf( data.orders[i].shipping_address.city ) < 0 ) {
                    uniqueCities.push( data.orders[i].shipping_address.city );
                }
                // get the customer id and add to list if it is unique
                if ( uniqueCustomers.indexOf( data.orders[i].customer.id ) < 0 ) {
                    uniqueCustomers.push( data.orders[i].customer.id );
                }

            }

            $scope.orders = data.orders;
            $scope.totalRevenue = totalRevenue.toFixed(2);
            $scope.totalLineItems = totalLineItems;
            $scope.uniqueCities = uniqueCities.length;
            $scope.uniqueCustomers = uniqueCustomers.length;
        });

    }]);
