(function function_name() {
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchController',LunchCheckController)

	LunchCheckController.$inject=['$scope']
	function LunchCheckController($scope) {
		$scope.Message = "Plesae enter lunch dishes";

		$scope.checkLengthToArray = function(){
									if ($scope.items) {
							   			 var array = $scope.items.split(',');
							   			 $scope.itemLength = array.length;
									}

									if ($scope.itemLength > 0 && $scope.itemLength <= 3) {
											$scope.Message = "Enjoy!!";
									}

									else
									{
										if ($scope.itemLength > 3) {
											
											$scope.Message ="Its Too Much";
										}
										
									}
							}
	}

})();