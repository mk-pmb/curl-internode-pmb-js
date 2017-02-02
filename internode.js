/*jslint indent: 2, maxlen: 80, continue: false, unparam: false */
/* -*- tab-width: 2 -*- */
/*global define: true, module: true, require: true */
((typeof define === 'function') && define.amd ? define : function (factory) {
  'use strict';
  var m = ((typeof module === 'object') && module), e = (m && m.exports);
  if (e) { m.exports = (factory(require, e, m) || m.exports); }
})(function (require) {
  'use strict';

  var EX = {
    '.json':  'json!',
  };


  (function interceptCurlRequire() {
    var core = require('curl/_privileged').core;
    console.log('internode init:', {
      version:  require('curl').version,    // "0.8.13"
      core:     String(core),               // "[object Object]"
      origCC:   String(core.createContext), // "undefined"
    });
    console.log('core:', core, 'keys:', Object.keys(core).join(', '));

    //core.createContext = function () {
    //  var dfn = origCC.apply(this, arguments), origRequire = dfn.require;
    //  dfn.require = function () {
    //    console.log.apply(null, ['intercepted require:'
    //      ].concat(Array.from(arguments)));
    //    return origRequire.apply(this, arguments);
    //  };
    //  return dfn;
    //};
  }());


  EX.load = function (resId, curlRqr, deliverToCurl, config) {
    var fext = resId.slice(-16).match(/\.[a-z0-9]+$/), plugin;
    fext = (fext ? fext[0] : '.');
    plugin = ((config.guessPluginsByFext || false)[fext] || EX[fext] || false);
    console.log('internode check:', [resId, fext, plugin]);

    if (plugin) { resId = plugin + resId; }

    function onLoad(mod) {
      console.log('internode onLoad:', resId, mod, arguments.length);
      return deliverToCurl(mod);
    }

    function onError(err) {
      console.error('internode onError:', resId, err, arguments.length);
      return deliverToCurl.error(err);
    }

    curlRqr([resId], onLoad, onError);
  };



  return EX;
});
