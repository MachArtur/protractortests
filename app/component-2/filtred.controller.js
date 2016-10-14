angular.module('app.component2').controller('FiltredController', function ($scope, books, genre) {
    'use strict';

    $scope.data = {
        books: [],
        genre: []
    };
    $scope.items = [];
      angular.copy(books.data, $scope.data.books);
      angular.copy(genre.data, $scope.items);

});
