var assert = require("assert");

// setup
var RandR = require("../index");
var randr = new RandR(process.env.RANDRMUSICAPIACCESSTOKEN);


describe('Albums', function(){
  describe('Info', function(){
    it('should return an album info object when called with a valid id', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.albums.id({
        id:'medianet:album:104336497'
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="Object","data is object");
        }
      );
    });
    it('should return an error when called with an invalid id', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.albums.id({
        id:'invalidid'
        },function(err,data){
          assert(err!=null);
        }
      );
    });
    it('should return a set of album info objects when called with many valid ids', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.albums.id({
          ids:[
            'medianet:album:104336497',
            'medianet:album:99983'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="Object","data is object");
        }
      );
    });
  });
  describe('Similar', function(){
    it('should return a list of similar albums when called with a valid id', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.albums.similar({
        id:'medianet:album:104336497'
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="Object","data is object");
        }
      );
    });
    it('should return an error when called with an invalid id', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.albums.similar({
        id:'invalidid'
        },function(err,data){
          assert(err!=null);
        }
      );
    });
    it('should return a list of similar albums when called with many valid ids', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.albums.similar({
          ids:[
            'medianet:album:104336497',
            'medianet:album:99983'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="Object","data is object");
        }
      );
    });
  });
});