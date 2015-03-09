# R&R Music API Helper Library for node

[![Build Status](https://img.shields.io/travis/hughrawlinson/randr-node.svg?style=flat-square)](https://travis-ci.org/hughrawlinson/randr-node) [![Dependency Status](https://img.shields.io/gemnasium/hughrawlinson/randr-node.svg?style=flat-square)](https://gemnasium.com/hughrawlinson/randr-node) ![npm version](https://img.shields.io/npm/v/randr-node.svg?style=flat-square)
---------------------------------------

This is my helper library for the R&R Music API. Documentation for the API itself can be found [here](http://dev.randrmusic.com/documentation).

# How to use
First, install the library and save it to your package.json file.
```
npm install --save randr-node
```
Then require the library and initialise it using your access key. I store my access key in an environmental variable, for ease of deployment. Access tokens are not yet publically available.
```javascript
var RandR = require('randr-node');
var randr = new RandR(process.env.RANDRMUSICAPIACCESSTOKEN);
```
Here is an example query to the API
```javascript
randr.tracks.recommendations({
  id:'medianet:track:104058357'
},function(err,data){
  if(err){console.err(data)}
  else{
    console.log(data);
  }
});
```

The layout of the wrapper API is nearly identical to that of the API:
```
randr = {
  tracks:{
    id,
    recommendations
  },
  albums:{
    id,
    similar
  },
  artists:{
    id,
    similar
  },
  search
}
```

The parameters of each endpoint are passed as options in the first argument to an API call. Bear in mind that when passing multiple ids, the parameter for an array of ids is `ids` rather than `id`. You can find the required and optional parameters in the API documentation. I do some parameter validation inside the library, but this is by no means complete, in part because if the validation is done on the API level, this helper client is more flexible to API updates.

# Contributing
Please try and stick to the coding style - i.e. don't change how we do indentation, bracketing style, or other similar style choices. Tests are important! Other than that, just submit a Pull Request and I'll merge it when I have time if I'm happy with it.
