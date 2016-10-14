angular.module('app.component1').controller('MyAddController', function($scope, $modalInstance, addBooksData, booksManagmentService) {
    'use strict'

    $scope.data = {
        book: {},
        books: addBooksData.books
    };
    $scope.genereItems = [];

    angular.copy(addBooksData.genere, $scope.genereItems);
  //  angular.copy(books.books, $scope.data.books);
    $scope.add = function() {
        booksManagmentService.add($scope.data.book , $scope.data.books);
        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.close();
    };

});
