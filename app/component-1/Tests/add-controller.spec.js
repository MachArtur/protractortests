describe('Add book controller tests', function() {
    'use strict'

    var $scope, modalMock = {
            close: jasmine.createSpy()
        },
        addBooksData = {},
        booksManagmentService;

    beforeEach(module('app.component1'));

    beforeEach(inject(function($controller, $rootScope, _booksManagmentService_) {
        $scope = $rootScope.$new();
        booksManagmentService = _booksManagmentService_;
        $controller('MyAddController', {
            $scope: $scope,
            $modalInstance: modalMock,
            addBooksData: addBooksData,
            booksManagmentService: booksManagmentService
        });
    }));


    describe('add book controller tests', function() {
        it('adds book', function() {
            //given
            //when
            spyOn(booksManagmentService, 'add');
            $scope.add();
            //then
            expect(booksManagmentService.add).toHaveBeenCalled();
            expect(modalMock.close).toHaveBeenCalled();
        });

        it('should close modal window', function() {
            //given
            //when
            $scope.cancel();
            //then
            expect(modalMock.close).toHaveBeenCalled();
        });
    });
});
