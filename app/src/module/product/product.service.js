(function () {
 'use strict';

 angular.module('product')
     .service('productSvc', ['$http', function ($http) {

          

     	//var json = "https://jsonplaceholder.typicode.com/posts";
     	var json = "app/src/module/product/json/questions.json";

     	this.getQuestions = function(data, onSuccess, onError) {
     		var  req = {
     			method: 'GET',
     			url: json
     		};
     		return $http(req);
     	};

     }]);
})();