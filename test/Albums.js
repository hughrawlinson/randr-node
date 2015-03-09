var assert = require("assert");
// setup
var RandR = require("../index");
var randr = new RandR(process.env.RANDRMUSICAPIACCESSTOKEN);


describe('Albums', function(){
  describe('Info', function(){
    it('should return an album info object when called with a valid id', function(done){
      randr.albums.id({
        id:'medianet:album:104336497'
        },function(err,data){
          assert.equal(err,null,"err is null");
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
    it('should return an error when called with an invalid id', function(done){
      randr.albums.id({
        id:'invalidid'
        },function(err,data){
          assert.equal(data.status,404);
          done();
        }
      );
    });
    it('should return a set of album info objects when called with many valid ids', function(done){
      randr.albums.id({
          ids:[
            'medianet:album:104336497',
            'medianet:album:99983'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
    it('should fail when called without a required parameter',function(done){
      randr.albums.id({},function(err,data){
          assert(err!=null);
          done();
        }
      );
    });
  });
  describe('Similar', function(){
    it('should return a list of similar albums when called with a valid id', function(done){
      randr.albums.similar({
        id:'medianet:album:104336497'
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
    it('should return an error when called with an invalid id', function(done){
      randr.albums.similar({
        id:'invalidid'
        },function(err,data){
          assert.equal(data.status,404);
          done();
        }
      );
    });
    it('should return a list of similar albums when called with many valid ids', function(done){
      randr.albums.similar({
          ids:[
            'medianet:album:104336497',
            'medianet:album:99983'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="object","data is object");
          done();
        }
      );
    });
    it('should fail when called without a required parameter',function(done){
      randr.albums.similar({},function(err,data){
          assert(err!=null);
          done();
        }
      );
    });
  });
});