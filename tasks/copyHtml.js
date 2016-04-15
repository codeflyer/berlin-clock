'use strict';

module.exports = (gulp, config) => {
  const tasks = {
    'copy-html': {
      fn: copyHtmlTask,
      help: 'Copy the html files'
    }
  };
  return tasks;

  function copyHtmlTask() {
    gulp.src(['client/*.html', 'client/*.png', 'client/*.jpg'])
      .pipe(gulp.dest(config.folders.build));
  }
};
