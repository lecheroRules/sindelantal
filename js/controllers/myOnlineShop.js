/**
 * Created by Alfredito on 19/11/2017.
 */

angular.module("myOnlineShop")
    .controller("myOnlineShopCtrl", function ($scope,cart,$location) {
        $scope.data = {
            products: [
                {id:1, name: "ASUS ZenPad Z300M-A2-GR", description: "16GB Negro, Gris - Tablet (IEEE 802.11n, Android, Pizarra, Negro, Gris)",
                    category: "Electrónica", price: 3380.95 },
                {id:2, name: "Lenovo TAB3 Essential - ZA0R0029US", description: '7" Android Tablet',
                    category: "Electrónica", price: 1495.31 },
                {id:3, name: 'AT-AT Driver, 6"', description: "Star Wars Figuras de Acción Star Wars Black Series",
                    category: "Coleccionables", price: 449.00 }],
            user: [
                {id:1, name:"Empresa X Y Z", street:"Calle Río Lerma 4, Piso 6, Colonia Cuauhtémoc, CP 53000, Ciudad de México", phone:"0445533678909"}]
        };


        $scope.sendOrder = function (shippingDetails) {
            var order = angular.copy(shippingDetails);
            order.products = cart.getProducts();

            $scope.data.orderId = 122312312313;
            cart.getProducts().length = 0;
            $location.path("/complete");

        }

    });

