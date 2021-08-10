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
    let releaseYear2010 = [];
    for (i = 0; i < response.data.total; i++) {
      if (response.data.entries[i].releaseYear > 2010) {
        releaseYear2010.push(response.data.entries[i]);
      }
    }
    $scope.releaseYear2010 = releaseYear2010;
    $scope.loading = false;
  });
});

app.controller("jqueryExample", function ($scope) {
  $("#clickToHide").click(function () {
    $(this).hide();
  });
});
