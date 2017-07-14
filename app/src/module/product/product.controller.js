(function () {
  'use strict';
	var app = angular.module('product');
	app.controller('productCtrl', ['$scope', 'productSvc', '$q', '$filter', '$stateParams',  function ($scope, productSvc, $q, $filter, $stateParams) {
		 
		 $scope.productPage = true;
		 $scope.checkoutPage = false;

		 // Product Json Object
		 $scope.productObj = [
			 		{
					 	id: 1,
					 	code: "SPM",
					 	name: "Sijil Pelajaran Malaysia",
					 	price: 269.99	
					 },{
					 	id: 2,
					 	code: "PT3",
					 	name: "Penilaian Menengah Rendah",
					 	price: 322.99
					 },{
					 	id: 3,
					 	code: "LPUPSR",
					 	name: "Lower Primary & Upper Primary",
					 	price: 394.99
					 }
		 ];

		 // Prmotion Configuration Json Object
		 $scope.promotionConfig = [
		 	{
		 		id : 1,
		 		name: "STANDARD",
		 		deal:  [
						 {
						 	productId: 1,
						 	promoText: "",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 0
						 },{
						 	productId: 2,
						 	promoText: "",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 0
						 },{
						 	productId: 3,
						 	promoText: "",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 0
						 }
					 ]
		 		}, {
		 		id : 2,
		 		name: "COLLEGE",
		 		deal:  [
						 {
						 	productId: 1,
						 	promoText: "3 for 2 deal",
						 	promoTo: 3,
						 	promoFor:2,
						 	dropPrice: 0
						 }, {
						 	productId: 2,
						 	promoText: "",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 0
						 },	{
						 	productId: 3,
						 	promoText: "",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 0
						 }
				 	]
		 		}, {
		 		id : 3,
		 		name: "STUDENTS",
		 		deal:  [
						 {
						 	productId: 1,
						 	promoText: "",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 0
						 }, {
						 	productId: 2,
						 	promoText: "PT3 where price drops to $299.99",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 299.99
						 },	{
						 	productId: 3,
						 	promoText: "",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 0
						 }
				 	]
		 		}, {
		 		id : 4,
		 		name: "SCHOOLS",
		 		deal:  [
						 {
						 	productId: 1,
						 	promoText: "",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 0
						 }, {
						 	productId: 2,
						 	promoText: "",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 0
						 },	{
						 	productId: 3,
						 	promoText: "4 or more price drops to $379.99",
						 	promoTo: 4,
						 	promoFor:1000000000,
						 	dropPrice: 379.99
						 }
				 	]
		 		}, {
		 		id : 5,
		 		name: "UNIVERSITY",
		 		deal:  [
						 {
						 	productId: 1,
						 	promoText: "5 for 4 deal",
						 	promoTo: 5,
						 	promoFor:4,
						 	dropPrice: 0
						 }, {
						 	productId: 2,
						 	promoText: "Price drops to 309.99",
						 	promoTo: 0,
						 	promoFor:0,
						 	dropPrice: 309.99
						 },	{
						 	productId: 3,
						 	promoText: "3 or more price drops to $389.99",
						 	promoTo: 3,
						 	promoFor:1000000000,
						 	dropPrice: 389.99
						 }
				 	]
		 		}
		 ];


		 $scope.userParamObj = $stateParams.userParams;

		 // Checking for user promotion.
		 $scope.userObj = {
		 	userId : $scope.userParamObj.id,
		 	name: $scope.userParamObj.username	 	
		 };


		$scope.productPromoObj = [];
		for(var i=0; i<$scope.promotionConfig.length; i++) {	
		 	if($scope.promotionConfig[i].id === $scope.userObj.userId) {
		 		$scope.promotionObj = $scope.promotionConfig[i];
		 		for(var j=0; j<$scope.promotionObj.deal.length; j++) {
		 			if($scope.promotionObj.deal[j].productId === $scope.productObj[j].id) {
		 				$scope.promotionObj.deal[j] = {
		 						promo: $scope.promotionObj.deal[j],
		 						id: $scope.productObj[j].id,
			 					code: $scope.productObj[j].code,
						 		name: $scope.productObj[j].name,
						 		price: $scope.productObj[j].price	
			 			};
		 			}
		 		}
		 	}
		 }

		 $scope.checkObj = [];
		 $scope.isExist = false;
		 $scope.addToCart = function(obj) {
		 	$scope.selectedObj = obj;
		 	if($scope.selectedObj.id) {
		 		if($scope.checkObj.length > 0) {
		 			for(var i=0; i<$scope.checkObj.length; i++) {
		 				if($scope.checkObj[i].id === $scope.selectedObj.id) {
		 					$scope.checkObj[i].quantity = $scope.selectedObj.quantity;
		 					$scope.isExist = true;
		 				}
		 			}
		 			if(!$scope.isExist) {
		 				setTimeout(function(){
		 					$scope.checkObj.push($scope.selectedObj);
		 				}, 500);
		 				$scope.isExist = false;
		 			}
		 		} else {
			 		$scope.checkObj.push($scope.selectedObj);
			 	}
		 	}
		 	console.log($scope.checkObj);		 	
		 };

		 $scope.checkout = function(obj) {
		 	$scope.checkoutObj = [];
		 	var tempTotal = 0;
		 	for(var i=0; i<obj.length; i++) {
		 		if(obj[i].promo.promoTo > 0 && obj[i].promo.promoFor > 0 && obj[i].promo.dropPrice == 0) {
		 			var discountQuantity = obj[i].promo.promoTo - obj[i].promo.promoFor;
		 			obj[i].sumPrice = (obj[i].quantity * obj[i].price) - (obj[i].price * discountQuantity);
		 		} else if(obj[i].promo.dropPrice > 0 && obj[i].promo.promoTo == 0 && obj[i].promo.promoFor == 0) {
		 			obj[i].sumPrice = obj[i].promo.dropPrice * obj[i].quantity;
		 		} else if(obj[i].promo.dropPrice > 0 && obj[i].promo.promoTo == 4 && obj[i].promo.promoFor == 1000000000) {
		 			obj[i].sumPrice = obj[i].promo.dropPrice * obj[i].quantity;
		 		} else if(obj[i].promo.dropPrice > 0 && obj[i].promo.promoTo == 3 && obj[i].promo.promoFor == 1000000000) {
		 			obj[i].sumPrice = obj[i].promo.dropPrice * obj[i].quantity;
		 		} else {
		 			obj[i].sumPrice = obj[i].price * obj[i].quantity;
		 		}
		 		$scope.checkoutObj.push(obj[i]);
		 	}
	 		$scope.totalAmt = $scope.total($scope.checkoutObj);
			$scope.productPage = false;
			$scope.checkoutPage = true;

		 };

		 $scope.total = function(obj) {
		 	var totalAmt = 0;
			for(var i=0; i<obj.length; i++) {
				totalAmt += obj[i].sumPrice;
			}
			return totalAmt;
		 };

	}]);

})();