(function() {
  try {
    var gulp = require('gulp');
    var runSequence = require('run-sequence');
    var sass = require('gulp-sass');
    var inlineCss = require('gulp-inline-css');
    var autoprefixer = require('gulp-autoprefixer');
    var plumber = require('gulp-plumber');
    var notify = require('gulp-notify');
    var beep = require('beepbeep');
    var watch = require('gulp-watch');
  } catch( e ) {
    console.log('Could not find one of the packages gulp needs to run.');
    console.log(e);
    return false;
  }

  // SCSS config
  var input = 'styles/main.scss';
  var output = '.build/css';
  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

  // HTML email templates config
  var templates = './*.html';

  // Compile scss files
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

  // Watch scss files and .html templates
  gulp.task('watch', function() {
      gulp.watch(input, ['styles']).on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });
      gulp.watch(templates, ['inline']).on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });

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