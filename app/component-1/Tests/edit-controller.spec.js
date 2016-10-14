describe('Edit book controller tests', function() {
    'use strict'

    var $scope, modalMock = {
            close: jasmine.createSpy()
        },
        editBookData = {},
        booksManagmentService;

    beforeEach(module('app.component1'));

    beforeEach(inject(function($controller, $rootScope, _booksManagmentService_) {
        $scope = $rootScope.$new();
        booksManagmentService = _booksManagmentService_;
        $controller('MyEditControler', {
            $scope: $scope,
            $modalInstance: modalMock,
            editBookData: editBookData,
            booksManagmentService: booksManagmentService
        });
    }));


    describe('edit book controller tests', function() {
        it('edit book', function() {
            //given
            //when
            spyOn(booksManagmentService, 'edit');
            $scope.edit();
            //then
            expect(booksManagmentService.edit).toHaveBeenCalled();
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
