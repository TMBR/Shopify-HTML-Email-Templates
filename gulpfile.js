(function() {
  try {
    var gulp = require('gulp');
    var runSequence = require('run-sequence');
    var sass = require('gulp-sass');
    var inlineCss = require('gulp-inline-css');
    var autoprefixer = require('gulp-autoprefixer');
    var plumber = require('gulp-plumber');
    var rename = require('gulp-rename');
    var notify = require('gulp-notify');
    var beep = require('beepbeep');
    var watch = require('gulp-watch');
  } catch( e ) {
    console.log('Could not find one of the packages gulp needs to run.  Please run `npm install` to see if that resolves the issue.  The error is below:');
    console.log(e);
    return false;
  }

  var onError = function(err) {
      notify.onError({
        title:    "Gulp error in " + err.plugin,
        message:  err.toString()
      })(err);
      beep(3);
      this.emit('end');
  };

  var input = 'styles/main.scss';
  var output = '.build/css';
  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };
  var templates = './*.html';

  gulp.task('styles', function () {
    return gulp
      .src(input)
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest(output));
  });

  // inline css
  gulp.task('inline', function() {
      return gulp.src(templates)
          .pipe(inlineCss())
          .pipe(gulp.dest('build/'));
  });

  gulp.task('watch', function() {
    return gulp
      // Watch the scss file for a change,
      .watch(input, ['styles'])
      .on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });
      /*
      .watch(templates, ['inline'])
      .on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });
      */

  });

  // Default Build task : gulp
  gulp.task('default', function(){
     runSequence(
      'styles',
      'inline',
      'watch'
    );
  });

})();