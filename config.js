app.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "components/home/home.html",
  });
});

app.config(function ($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "components/home/home.html",
  });
});

app.config(function ($routeProvider) {
  $routeProvider.when("/movies", {
    templateUrl: "components/movies/movies.html",
  });
});

app.config(function ($routeProvider) {
  $routeProvider.when("/series", {
    templateUrl: "components/series/series.html",
  });
});

app.config(function ($routeProvider) {
  $routeProvider.when("/trial", {
    templateUrl: "components/trial/trial.html",
  });
});
