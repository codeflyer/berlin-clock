'use strict';

module.exports = (gulp) => {
  return {
    watchClient: {
      fn: watchClient,
      help: 'Watches the client files for changes.'
    }
  };

  function watchClient() {
    gulp
      .watch('client/**/*.html', ['copy-html'])
      .on('error', error => {
        console.error(error);
      });

    gulp
      .watch('client/**/*.scss', ['css'])
      .on('error', error => {
        console.error(error);
      });
  }
};
