(function () {
    'use strict';
    angular.module("product", [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('product', {
                            url: "/product"
                            , title: "product"
                            , templateUrl: "app/src/module/product/product.html"
                            , controller: "productCtrl"
                            , params:{
                                userParams:""
                            }
                    })
        }]);
})();