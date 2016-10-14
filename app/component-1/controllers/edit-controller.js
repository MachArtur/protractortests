angular.module('app.component1').controller('MyEditControler', function($scope, $modalInstance, editBookData, booksManagmentService) {
    'use strict'

    $scope.data = {
        //selectedBook: {},
        selectedBook: editBookData.book,
        selectedBookEdit: {},
        books: editBookData.books,
        date: new Date()
    };
    $scope.genereItems = [];

    angular.copy(editBookData.genereItems, $scope.genereItems);

    angular.copy(editBookData.book, $scope.data.selectedBookEdit);
    $scope.data.date.setFullYear($scope.data.selectedBookEdit.year);

    $scope.edit = function() {
        booksManagmentService.edit($scope.data);
        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.close();
    };
});
