var assert = require("assert");

// setup
var RandR = require("../index");
var randr = new RandR(process.env.RANDRMUSICAPIACCESSTOKEN);


describe('Search', function(){
  describe('Tracks', function(){
    it('should return a set of tracks', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      randr.search.tracks({
        q:'Taylor Swift'
      },function(err,data){
        console.log(JSON.parse(data).tracks[0]);
        randr.tracks.recommendations({
          id:JSON.parse(data).tracks[0].id
          },function(err,data){
            assert(err===null);
          }
        );
      })
    });
  });
});