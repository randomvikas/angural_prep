/**
 * Created by vshr on 2016-09-17.
 */
(function () {
  'use strict';
    angular.module('NameCalculator',[])
        .controller('NameCalculatorController', function ($scope,$filter) {
            $scope.name ="";
            $scope.finalValue =0;
            $scope.upperName="";

            $scope.upper =  function () {
                var upCase = $filter('uppercase');
                $scope.upperName = upCase($scope.name);
            }

            $scope.dispayNumeric= function(){
                $scope.finalValue = convertCharToString($scope.name);
            }

        function convertCharToString(string){
            var totalStringValue =0 ;
            for(var i=0; i < string.length;i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
        });
})();