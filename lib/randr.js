var Network = require('./network');
var Tracks = require('./tracks');
var Artists = require('./artists');
var Albums = require('./albums');
var Search = require('./search');

module.exports = function RAndR(apiKey) {

  this.baseUri = 'http://api.randrmusic.com/api/';

  this.getApiKey = function getApiKey() {
    return apiKey;
  };

  this.setApiKey = function setApiKey(key) {
    apiKey = key;
  };

  this.network = new Network(this);

  this.tracks = new Tracks(this);
  this.artists = new Artists(this);
  this.albums = new Albums(this);
  this.search = new Search(this);
};
