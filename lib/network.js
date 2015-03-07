var request = require('request'),
    _ = require('lodash');

module.exports = function Network(randr) {

  var requestHandler = function requestHandler(callback) {
    return function(error, response, body) {
      if (error) return callback(error, null);

      // if (response.statusCode !== 200) return callback(new Error(body.error||body.message), null);

      return callback(null, body);
    };
  };

  this.get = function get(uri, callback, anonymous) {
    uri = randr.baseUri + uri;
    request({
      url:uri,
      headers:{
        'x-api-auth':randr.getApiKey()
      }
    }, requestHandler(callback));
  };

  this.post = function(uri, data, callback, anonymous) {
    uri = randr.baseUri + uri;
    request({
      uri: uri,
      method: 'POST',
      headers:{
        'x-api-auth':randr.getApiKey()
      },
      json:data
    }, requestHandler(callback));
  };

  this._filterParams = function _filterParams(params, filter) {
    return _.pick(params, filter);
  };

  this._buildQuery = function _buildQuery(params) {
    return _.map(params, function(value, key) {
      if (_.isArray(value)) {
        return key + '=' + value.join('&' + key + '=');
      } else {
        return key + '=' + value;
      }
    }).join('&');
  };



};
