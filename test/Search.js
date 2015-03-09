var assert = require("assert");
// setup
var RandR = require("../index");
var randr = new RandR(process.env.RANDRMUSICAPIACCESSTOKEN);


describe('Search', function(){
  describe('Tracks', function(){
    it('should return a set of tracks', function(done){
      randr.search.tracks({
        q:'Taylor Swift'
      },function(err,data){
        randr.tracks.recommendations({
          id:data.tracks[0].id
          },function(err,data){
            assert(err===null);
            done();
          }
        );
      })
    });
    it('should fail when called without a required parameter',function(done){
      randr.search.tracks({},function(err,data){
          assert(err!=null);
          done();
        }
      );
    });
  });
});