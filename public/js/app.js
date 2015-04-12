var App = angular.module('App', ['lumx', 'ngRoute']);
/**
 * Routing configure
 */
App.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main',
            controller: 'DashboardController'
        })
        .when('/kpi/:id', {
            templateUrl: '/partials/kpi/main',
            controller: 'KpiController'
        })
        .when('/detail/:id', {
            templateUrl: '/partials/detail',
            controller: 'DetailController'
        })
        .when('/search', {
            templateUrl: '/partials/search',
            controller: 'SearchController'
        })
        .otherwise({
            redirectTo: '/'
        });

});

App.controller('ToolbarController', function ($scope, $location) {
    $scope.gohome = function () {
        $location.path('/');
    };
});
