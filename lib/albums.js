var _ = require('lodash');

module.exports = function albums(randr) {
  this.info = function info(params, callback) {
    params = randr.network._filterParams(params, [
      'id',
      'ids'
    ]);

    if (!params.id&&!params.ids) {
      return callback(new Error('Must specify an id'), null);
    }
    
    if(params.id!==undefined){
      var uri = 'albums/' + params.id;
      randr.network.get(uri, function(err, data) {
        if (err) return callback(err, null);

        callback(null, data);
      });
    }
    else{
      var uri = 'albums';
      randr.network.post(uri, params, function(err, data) {
        if (err) return callback(err, null);

        callback(null, data);
      });
    }
  };
  this.similar = function similar(params, callback) {
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
      'mood',
      'colors[green][from]',
      'colors[green][to]',
      'limit',
      'offset'
    ]);

    if (!params.id&&!params.ids) {
      return callback(new Error('Must specify an id'), null);
    }
    if(params.id!==undefined){
      var query = randr.network._buildQuery(params);
      var uri = 'albums/'+params.id+'/similar';
      randr.network.get(uri, function(err, data) {
        if (err) return callback(err, null);

        callback(null, data);
      });
    }
    else{
      var uri = 'albums/similar';
      randr.network.post(uri, params, function(err, data) {
        if (err) return callback(err, null);

        callback(null, data);
      });
    }
  };
};

