var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

// Serve and watch for sass/html -- Add js!
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

gulp.task('default', ['serve']);
