describe('Add book controller tests', function() {
    'use strict'

    var $scope, modalMock = {
            open: jasmine.createSpy()
        },
        books = {},
        genere = {},
        index  = 3;

    beforeEach(module('app.component1'));

    beforeEach(inject(function($controller, $rootScope, $http) {
        $scope = $rootScope.$new();
        $controller('ManagmentController', {
            $scope: $scope,
            $modal: modalMock,
            books: books,
            genere: genere
        });
    }));


    describe('menagment controller tests', function() {
        it('open add dialog', function() {
            //given
            //when
            //spyOn($modal, 'open');
            $scope.add();
            //then
            //expect(booksManagmentService.add).toHaveBeenCalled();
            expect(modalMock.open).toHaveBeenCalled();
        });

        it('should set correct row index', function() {
            //given
            //when
            $scope.selectRow(3);
            //then
            expect($scope.selectedRowIndex).toBe(3);
        });
    });
});
