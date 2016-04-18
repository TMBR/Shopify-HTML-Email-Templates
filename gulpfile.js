(function() {
  try {
    var gulp = require('gulp');
    var runSequence = require('run-sequence');
    var sass = require('gulp-scss');
    var inlineCss = require('gulp-inline-css');
    var autoprefixer = require('gulp-autoprefixer');
    var plumber = require('gulp-plumber');
    var rename = require('gulp-rename');

  } catch( e ) {
    console.log('Could not find one of the packages gulp needs to run.  Please run `npm install` to see if that resolves the issue.  The error is below:');
    console.log(e);
    return false;
  }
gulp.task('styles', function(){
  return gulp.src('styles/main.scss')
    .pipe(plumber(function (error) {
        errorHandler(
          'building the styles',
          this,
          error.message
        )
    }))
    .pipe(sass({
      precision: 10
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('build/css'))
    .pipe(rename('main.css'))
});


gulp.task('inline', function() {
    // inline css
    return gulp.src('./*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('build/'));
});

gulp.task('default', function(){
   runSequence(
    'styles',
    'inline'
  );
});

})();