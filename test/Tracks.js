var assert = require("assert");
var app = require('../lib-cov/tracks');
// setup
var RandR = require("../index");
var randr = new RandR(process.env.RANDRMUSICAPIACCESSTOKEN);


describe('Tracks', function(){
  describe('Info', function(){
    it('should return a track info object when called with a valid id', function(done){
      randr.tracks.id({
        id:'medianet:track:104058357'
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
    it('should return an error when called with an invalid id', function(done){
      randr.tracks.id({
        id:'invalidid'
        },function(err,data){
          assert.equal(data.status,404);
          done();
        }
      );
    });
    it('should return a set of track info objects when called with many valid ids', function(done){
      randr.tracks.id({
          ids:[
            'medianet:track:104058357',
            'soundcloud:track:97384586'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
  });
  describe('Recommendations', function(){
    it('should return a list of recommendations when called with a valid id', function(done){
      randr.tracks.recommendations({
        id:'medianet:track:104058357'
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
    it('should return an error when called with an invalid id', function(done){
      randr.tracks.recommendations({
        id:'invalidid'
        },function(err,data){
          assert.equal(data.status,404);
          done();
        }
      );
    });
    it('should return a list of recommendations when called with many valid ids', function(done){
      randr.tracks.recommendations({
          ids:[
            'medianet:track:104058357',
            'soundcloud:track:97384586'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
  });
});