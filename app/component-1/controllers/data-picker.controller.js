angular.module('app.component1').controller('DatepickerDemoCtrl', function ($scope) {
  var currentData = new Date();
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yyyy',
    startingDay: 1,
    minMode: 'year'
  };

  $scope.formats = ['yyyy'];
  $scope.format = $scope.formats[0];


  $scope.status = {
    opened: false
  };
});
