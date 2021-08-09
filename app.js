var app = angular.module("mainApp", ["ngRoute"]);

app.component("headerComp", {
  bindings: {},
  controller: [function ($scope) {}],
  templateUrl: "components/header/header.html",
});

app.component("footerComp", {
  bindings: {},
  controller: [function ($scope) {}],
  templateUrl: "components/footer/footer.html",
});

app.component("homeComp", {
  bindings: {},
  controller: [function ($scope) {}],
  templateUrl: "components/home/home.html",
});

/* function getMovies($scope, $http) {
  $http({
    method: "GET",
    url: "assets/data/sample.json",
  }).then(function (response) {
    let selectMovies = [];
    for (i = 0; i < response.data.total; i++) {
      if (response.data.entries[i].programType != "series") {
        selectMovies.push(response.data.entries[i]);
      }
    }
    $scope.entries = selectMovies;
  });
} */

app.controller("loadingScreen", function ($scope, $timeout) {
  $scope.loading = true;
  $scope.content = "Loading...";
  $timeout(function () {
    $scope.loading = false;
    $scope.content = "Oops, something went wrong...";
  }, 5000);
});

app.controller("getData", function ($scope, $http) {
  $http({
    method: "GET",
    url: "assets/data/sample.json",
  }).then(function (response) {
    $scope.entries = response.data.entries;
  });
});
