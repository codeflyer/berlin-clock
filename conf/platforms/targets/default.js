'use strict';
const path = require('path');

module.exports = {
  app: {
    name: 'Super awesome Berlin Clock',
    title: 'Super awesome Berlin Clock'
  },
  server: {
    port: 5000
  },
  folders: {
    build: path.join(__dirname, '../../../public')
  },
  build: {},
  services: {
    html: {
      links: [
        {
          rel: 'stylesheet',
          crossorigin: 'anonymous',
          href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
          integrity: 'sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7'
        },
        { rel: 'stylesheet', type: 'text/css', href: '/styles.css' }
      ],
      scripts: [
        { type: 'text/javascript', src: '/libs.js' },
        { type: 'text/javascript', src: '/main.js' }
      ]
    }
  }
};
