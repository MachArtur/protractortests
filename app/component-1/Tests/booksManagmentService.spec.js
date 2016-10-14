describe('Books Managment Service tests', function() {

beforeEach(module('app.component1'));
beforeEach(inject(function(booksManagmentService, _$httpBackend_) {
    service = booksManagmentService;
    $httpBackend = _$httpBackend_; // angular strips the underscores so
                                   // we don't need to use unique names

}));
it('should test http request add return success', function() {
   $httpBackend.whenPOST('http://localhost:8090/saveBook').respond();
});

it('should test http request edit return success', function() {
   $httpBackend.whenPOST('http://localhost:8090/updateB').respond();
});


});

// it('should invoke service with right paramaeters', function() {
//     var booksList = [-];
//     var data = {book:{title : "Odyseja", year:2016, author:"Hommer", version:0, genere:"IT"},books:[]};
//     $httpBackend.expectPOST('http://localhost:8090/saveBook', {
//
//          "book" : {
//            "title" : 'Odyseja',
//            "year" : 2016,
//            "author" : 'Hommer',
//            "version" : 0,
//            "genere" : 'IT'
//          },
//          "books" :booksList,
//          "year": 2016,
//          "version": 0
//
//
//     }).respond({});
//
//     // EXPECTED: {"data":{"book":{"title":"Odyseja","year":2016,"author":"Hommer","version":0,"genere":"IT"}}}
//     //    GOT:      {"data":{"year":2015},"year":2016,"version":0}
//     // service.add(data = {"data":{"data":{"book" :{
//     //           "title" : 'Odyseja',
//     //            "author" : 'Hommer',
//     //            "year":2016,
//     //            "genere" : 'IT'},"year":2016},"year":2016},"year":2016});
//     //service.add({"""data":{"book":{"book":{"year":2016}}}});
//     service.add(data);
//     $httpBackend.flush();
// });
// });

// "title": "Odyseja","author": "Homer","year": 1991,"version": 0,"genere": "IT"
