angular.module('app.component1').factory('booksManagmentService', function($http) {
    'use strict';

    return {
        edit: function(data) {

                data.selectedBookEdit.year = data.date.getFullYear();


            data.selectedBook.version++;
            $http({
                method: 'POST',
                url: 'http://localhost:8090/updateBook',
                data: data.selectedBookEdit
            }).then(function successCallback(response) {
              // data.books.push(response.data);
              data.selectedBook.author = response.data.author;
              data.selectedBook.title = response.data.title;
              data.selectedBook.genere = response.data.genere;
              data.selectedBook.version = response.data.version;
              data.selectedBook.year = response.data.year;
              data.selectedBook.id = response.data.id;
            }, function errorCallback(respones) {

            });
        },
        add: function(data, books) {
          var currentData = new Date();
            if (typeof data !== 'undefined' && typeof data.year !== 'undefined') {
                data.year = data.year.getFullYear();
            } else {
              data.year = currentData.getFullYear();
            }

            data.version = 0;

            $http({
                method: 'POST',
                url: 'http://localhost:8090/saveBook',
                data: data
            }).then(function successCallback(response) {
                books.push(response.data);
            }, function errorCallback(respones) {

            });
        }

    };

});
