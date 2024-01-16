var expect  = require("chai").expect;
var request = require("request");

const client = require('../dbConnection');

describe('MongoDB connection', function(){
    it('Connect to MongoDB successfully', function(done){
      expect(client.topology.isConnected()).to.equal(true);
      done();
    });
});