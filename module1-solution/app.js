(function(){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.message = '';
    $scope.check = function () {
      if ($scope.message == '') {
        $scope.message = 'Please enter data first';
      } else {
        var items = $scope.message.split(',');
        var itemdata = [];
        for (var item in items) {
          if (items[item] != '') {
              itemdata.push(items[item]);
          }
        }
        if (itemdata.length<=3 && itemdata.length>1) {
            $scope.message = "Enjoy!";
        } else if (itemdata.length>3) {
            $scope.message = "Too much";
        }
      }
    }

  }
})();
