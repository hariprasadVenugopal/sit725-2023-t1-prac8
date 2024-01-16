var expect  = require("chai").expect;
var request = require("request");

let cat = {
    title: 'testing get api',
    subTitle: 'get call',
    path: '/images/livedemo.png',
    description: 'testing123'
}

let cat2 = {
    title: 'testing post api',
    subTitle: 'post call',
    path: '/images/ontrack.png',
    description: 'testing123'
}

let cat3 = {
    title: 'testing invalid path',
    subTitle: 'post-get call',
    path: 'invalid-path',
    description: 'testing123'
}

describe('Test get call', function() {
    var url = "http://localhost:3000/api/cats";
    it('Return status code of 200', function(done){
        request(url, function(error,response,body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Returns 200 status code in response body', function(done){
        request(url, function(error,response,body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done();
          });
    });

    it('Return message success', function(done){
        request(url, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('success');
            done();
        });
    });

});

describe('Test post call', function() {
    var url2 = "http://localhost:3000/api/cat";
    it('Inserting card details into database', function(done){
        request.post({url:url2, form:cat}, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('success');
            done();
        });
    });

    it('Returns 201 status code in response body of card insert', function(done){
        request.post({url:url2, form:cat2}, function(error,response,body){
            body = JSON.parse(body);
            expect(body.statusCode).to.equal(201);
            done();
        });
    });

    it('Return message success', function(done){
        request.post({url:url2, form:cat}, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('success');
            done();
        });
    });
});

describe('Test for invalid path', function(){
    var url3 = "http://localhost:3000/api/cat";
    var url4 = "http://localhost:3000/invalid-path";
    it('Inserting card details into database', function(done){
        request.post({url:url3, form:cat3}, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('success');
            done();
        });
    });

    it('Retrieving data with missing path will have status code 404', function(done){
        request(url4, function(error,response,body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
})