app.controller("getSeries", function ($scope, $http, $timeout) {
  $scope.loading = true;
  $scope.content = "Loading...";
  $timeout(function () {
    $http({
      method: "GET",
      url: "assets/data/sample.json",
    }).then(function (response) {
      let selectSeries = [];
      for (i = 0; i < response.data.total; i++) {
        if (response.data.entries[i].programType == "series") {
          selectSeries.push(response.data.entries[i]);
        }
      }
      $scope.entries = selectSeries;
      $scope.loading = false;
    });
  }, 5000);
});
