var _ = require('lodash');

module.exports = function tracks(randr) {
  this.id = function id(params, callback) {
    params = randr.network._filterParams(params, [
      'id',
      'ids'
    ]);

    if (!params.id&&!params.ids) {
      return callback(new Error('Must specify an id'), null);
    }
    
    if(params.id!==undefined){
      var uri = 'tracks/' + params.id;
      randr.network.get(uri, function(err, data) {
        if (err) return callback(err, null);

        callback(null, data);
      });
    }
    else{
      var uri = 'tracks';
      randr.network.post(uri, params, function(err, data) {
        if (err) return callback(err, null);

        callback(null, data);
      });
    }
  };
  this.recommendations = function recommendations(params, callback) {
    params = randr.network._filterParams(params, [
      'id',
      'ids',
      'bpm[from]',
      'bpm[to]',
      'energy[from]',
      'energy[to]',
      'bpm_class[from]',
      'bpm_class[to]',
      'hss[from]',
      'hss[to]',
      'rnd[from]',
      'rnd[to]',
      'artist_id',
      'album_id',
      'mood'
    ]);

    if (!params.id&&!params.ids) {
      return callback(new Error('Must specify an id'), null);
    }
    if(params.id!==undefined){
      var query = randr.network._buildQuery(params);
      var uri = 'albums/'+params.id+'/recommendations';
      randr.network.get(uri, function(err, data) {
        if (err) return callback(err, null);

        callback(null, data);
      });
    }
    else{
      var uri = 'albums/recommendations';
      randr.network.post(uri, params, function(err, data) {
        if (err) return callback(err, null);

        callback(null, data);
      });
    }
  };
};


