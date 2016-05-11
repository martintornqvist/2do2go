var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');
    del = require('del');
    build = require('gulp-build');

// Serve and watch for sass/html in dev mode
gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: './app',
        notify: false,
        debugInfo: false
    });

    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/scripts/*.js').on('change', browserSync.reload);
});

// Compile and autoinject into browser
gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

// Serve the build mode, before heading to deploy
gulp.task('build:serve', function(){
  browserSync.init({
    server: './build/'
  })
})

// Build task
gulp.task('build:cleanfolder', function(){
  return del(['build/**']);
});
gulp.task('build:copy', ['build:cleanfolder'], function(){
  return gulp.src('app/**/*')
  .pipe(gulp.dest('build/'));
});
gulp.task('build:remove', ['build:copy'], function(cb){
  del([
    'build/scss/',
    'build/js/!(*.min.js)'
  ],cb);
});

gulp.task('build', ['build:copy', 'build:remove']);
gulp.task('default', ['serve']);
