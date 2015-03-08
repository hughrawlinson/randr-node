var assert = require("assert");

// setup
var RandR = require("../index");
var randr = new RandR(process.env.RANDRMUSICAPIACCESSTOKEN);


describe('Artists', function(){
  describe('Info', function(){
    it('should return an artist info object when called with a valid id', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.artists.id({
        id:'medianet:artist:13665'
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="Object","data is object");
        }
      );
    });
    it('should return an error when called with an invalid id', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.artists.id({
        id:'invalidid'
        },function(err,data){
          assert(err!=null);
        }
      );
    });
    it('should return a set of artist info objects when called with many valid ids', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.artists.id({
          ids:[
            'medianet:artist:13665',
            'medianet:artist:19575'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="Object","data is object");
        }
      );
    });
  });
  describe('Similar', function(){
    it('should return a list of similar artists when called with a valid id', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.artists.similar({
        id:'medianet:artist:13665'
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="Object","data is object");
        }
      );
    });
    it('should return an error when called with an invalid id', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.artists.similar({
        id:'invalidid'
        },function(err,data){
          assert(err!=null);
        }
      );
    });
    it('should return a list of similar artists when called with many valid ids', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.artists.similar({
          ids:[
            'medianet:artist:13665',
            'medianet:artist:19575'
          ]
        },function(err,data){
          assert.equal(err,null,"err is null")
          assert(typeof(data)=="Object","data is object");
        }
      );
    });
  });
});