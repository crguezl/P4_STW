var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat');
    del         = require('del');
    minifyHTML  = require('gulp-minify-html');
    minifyCSS   = require('gulp-minify-css');
    imagemin    = require("gulp-imagemin");
    notify      = require("gulp-notify");
    open        = require("gulp-open");
    

gulp.task('minify', function () {
  gulp.src('./js/temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  gulp.src('./css/*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});