var assert = require("assert");
var app = require('../lib-cov/artists');
// setup
var RandR = require("../index");
var randr = new RandR(process.env.RANDRMUSICAPIACCESSTOKEN);


describe('Artists', function(){
  describe('Info', function(){
    it('should return an artist info object when called with a valid id', function(done){
      randr.artists.id({
        id:'medianet:artist:13665'
        },function(err,data){
          assert.equal(err,null,"err is null");
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
    it('should return an error when called with an invalid id', function(done){
      randr.artists.id({
        id:'invalidid'
        },function(err,data){
          assert.equal(data.status,404);
          done();
        }
      );
    });
    it('should return a set of artist info objects when called with many valid ids', function(done){
      randr.artists.id({
          ids:[
            'medianet:artist:13665',
            'medianet:artist:19575'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null");
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
  });
  describe('Similar', function(){
    it('should return a list of similar artists when called with a valid id', function(done){
      randr.artists.similar({
        id:'medianet:artist:13665'
        },function(err,data){
          assert.equal(err,null,"err is null");
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
    it('should return an error when called with an invalid id', function(done){
      randr.artists.similar({
        id:'invalidid'
        },function(err,data){
          assert.equal(data.status,404);
          done();
        }
      );
    });
    it('should return a list of similar artists when called with many valid ids', function(done){
      randr.artists.similar({
          ids:[
            'medianet:artist:13665',
            'medianet:artist:19575'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null");
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
  });
});