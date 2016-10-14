angular.module('app.component1', ['ngRoute','app.component1.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/component-1/dialog-a', {
            templateUrl: 'component-1/dialog-a/dialog-a.tpl.html',
            controller: 'ManagmentController',
            resolve: {
                books: function($http){
                    return $http.get('http://localhost:8090/getAllBooks');
                },
                genere: function ($http) {
                  return  $http.get('http://localhost:8090/getAllGenre');
                }
            }
        });
    });
