angular.module('app.component1').controller('ManagmentController', function($scope, $http, $modal, books, genere) {
        'use strict';

        $scope.data = {
            books: books.data,
            genere: [],
        };


        angular.copy(genere.data, $scope.data.genere);

        $scope.edit = function() {
            $modal.open({
                templateUrl: '/component-1/modal-dialog/modal-dialog-edit.tpl.html',
                controller: 'MyEditControler',
                size: 'lg',
                resolve: {
                    editBookData: function() {
                        return {
                            book: $scope.data.books[$scope.selectedRowIndex],
                            genereItems: $scope.data.genere,
                            books: $scope.data.books
                        };
                    }
                }
            });
        };

        $scope.add = function() {
            $modal.open({
                templateUrl: '/component-1/modal-dialog/modal-dialog-add.tpl.html',
                controller: 'MyAddController',
                size: 'lg',
                resolve: {
                    addBooksData: function($http) {
                        return $scope.data;
                    }
                }
            });
        };



        $scope.selectRow = function(index) {
            $scope.selectedRowIndex = index;
        };

    });
