var _ = require('lodash');

module.exports = function search(randr) {
  this.content = function content(params, callback) {
    params = randr.network._filterParams(params, [
      'q',
      'limit',
      'offset'
    ]);

    if (!params.q) {
      return callback(new Error('Must specify a query'), null);
    }
    
    var query = randr.network._buildQuery(params);
    var uri = 'search?' + query;
    randr.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };
  this.tracks = function tracks(params, callback) {
    params = randr.network._filterParams(params, [
      'q',
      'limit',
      'offset',
      'bpm[from]',
      'bpm[to]',
      'bpm_class[from]',
      'bpm_class[to]',
      'rnd[from]',
      'rnd[to]',
      'hss[from]',
      'hss[to]',
      'energy[from]',
      'energy[to]',
      'artist_id',
      'album_id',
      'color',
      'mood',
      'music_style',
      'colors[green][to]',
      'colors[green][from]',
      'music_styles[cool_jazz][to]',
      'music_styles[cool_jazz][from]',
      'mood[happy_songs][to]',
      'mood[happy_songs][from'
    ]);

    if (!params.q) {
      return callback(new Error('Must specify a query'), null);
    }
    
    var query = randr.network._buildQuery(params);
    var uri = 'search/tracks?' + query;
    randr.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };
  this.artists = function artists(params, callback) {
    params = randr.network._filterParams(params, [
      'q',
      'limit',
      'offset'
    ]);
    
    var query = randr.network._buildQuery(params);
    var uri = 'search/artists?' + query;
    randr.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });

  };
  this.albums = function albums(params, callback) {
    params = randr.network._filterParams(params, [
      'q',
      'limit',
      'offset'
    ]);
    
    var query = randr.network._buildQuery(params);
    var uri = 'search/albums?' + query;
    randr.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });

  };
};

