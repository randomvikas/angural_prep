/**
 * Created by vshr on 2016-09-18.
 */
(function(){
    'use strict';
    var app = angular.module("LunchCheck",[]);
    app.controller('LunchCheckController',['$scope',
        function LaunchCheckController($scope){
        var splitor =",";
        $scope.foodMessage ="";
        $scope.foodList ="";
        $scope.findFoodLimit = function(){
            console.log("The food list is "+$scope.foodList);
            if($scope.foodList === null || $scope.foodList.length === 0){
                $scope.foodMessage = "Please provide quantity"
            }else{
                var listofFoods = $scope.foodList.split(splitor);
                console.log(listofFoods.length);
                if(listofFoods.length <= 3  && listofFoods.length > 0){
                    $scope.foodMessage = "Enjoy!";
                }else{
                    $scope.foodMessage = "Too much!";
                }
            }


        }

    }]);

})();
