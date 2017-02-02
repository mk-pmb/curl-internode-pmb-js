/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, browser: true */
/* -*- tab-width: 2 -*- */
(function () {
  'use strict';
  var body = document.getElementsByTagName('body')[0],
    testName = location.pathname.replace(/^\S+\//, '').replace(/\.html$/, '');
  function mktag(tn) { return document.createElement(tn); }
  body.appendChild(mktag('h2')).innerHTML = testName;
  if (location.protocol === 'file:') {
    body.appendChild(mktag('p')).innerHTML = 'XHR errors' +
      ' when testing via file:// protocol? Try <a href="' +
      'https://mk-pmb.github.io/curl-internode-pmb-js/test/' + testName +
      '.html">HTTP(S)</a>.';
  }
}());
