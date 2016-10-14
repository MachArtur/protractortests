angular.module('app.component2', ['ngRoute', 'app.component2.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/component-2/dialog-b', {
            templateUrl: 'component-2/dialog-b/dialog-b.html',
            controller: 'FiltredController',
            resolve: {
                books: function ($http) {
                    // return $http.get('/component-1/books.json');
                    return $http.get('http://localhost:8090/getAllBooks');
                },
                genre: function ($http) {
                  return  $http.get('http://localhost:8090/getAllGenre');
                }
            }
        });
    });
