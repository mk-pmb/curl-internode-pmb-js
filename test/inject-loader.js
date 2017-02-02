/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, browser: true */
/* -*- tab-width: 2 -*- */
(function () {
  'use strict';
  var loaderCfg = { loader: 'doc./../internode.js' };

  window.tweakCurlCfg = function (curlCfg, amdldr161) {
    console.log('amdldr161 cfg:', amdldr161.cfg);
    return (curlCfg && loaderCfg);
  };

  window.tweakCurlCfg = loaderCfg;
}());
