(function () {
    'use strict';

    angular.module('home')
        .controller('homeCtrl', ['$scope','$state',  function ($scope,$state) {

            // User Json Obj
            $scope.userAccObj = [
                {
                    id: 1,
                    user: "STANDARD",
                    name: "STANDARD",
                    password:"STANDARD"  
                 },{
                    id: 2,
                    user: "COLLEGE",
                    name: "COLLEGE",
                    password: "COLLEGE"   
                 },{
                    id: 3,
                    user: "STUDENTS",
                    name: "STUDENTS",
                    password: "STUDENTS"
                 },{
                    id: 4,
                    user: "SCHOOLS",
                    name: "SCHOOLS",    
                    password: "SCHOOLS"
                 },{
                    id: 5,
                    user: "UNIVERSITY",
                    name: "UNIVERSITY",
                    password: "UNIVERSITY"
                 }
            ];

        	$scope.userLogin = function($valid) {                
        		if($valid) {
        			console.log($scope.userObj);
                    for(var i=0; i<$scope.userAccObj.length; i++) {
                        if($scope.userObj.userName === $scope.userAccObj[i].user && $scope.userObj.password === $scope.userAccObj[i].password) {
                            $scope.userObj.id = $scope.userAccObj[i].id;
                            $state.go('product', {userParams: $scope.userObj});
                        }
                    }
                    return false;
        		} else {
        			return false;
        		}

        	}
        }]);
})();