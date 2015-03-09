var assert = require("assert");
var app = require('../lib-cov/search');
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
  });
});