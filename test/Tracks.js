var assert = require("assert");
// setup
var RandR = require("../index");
var randr = new RandR(process.env.RANDRMUSICAPIACCESSTOKEN);


describe('Tracks', function(){
  describe('Info', function(){
    it('should return a track info object when called with a valid id', function(done){
      randr.tracks.info({
        id:'medianet:track:104058357'
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
    it('should return an error when called with an invalid id', function(done){
      randr.tracks.info({
        id:'invalidid'
        },function(err,data){
          assert.equal(data.status,404);
          done();
        }
      );
    });
    it('should return a set of track info objects when called with many valid ids', function(done){
      randr.tracks.info({
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
    it('should fail when called without a required parameter',function(done){
      randr.tracks.info({},function(err,data){
          assert(err!=null);
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
    it('should fail when called without a required parameter',function(done){
      randr.tracks.recommendations({},function(err,data){
          assert(err!=null);
          done();
        }
      );
    });
  });
});