var gulp = require('gulp');
var jslint = require('gulp-jslint');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('lint', function () {
    return gulp.src(['./app/app.js', "./app/*/*.js"])
        .pipe(jslint({ /* this object represents the JSLint directives being passed down */ }))
        .pipe(jslint.reporter('stylish'));
});

gulp.task('hint', function () {
    return gulp.src(['./app/app.js', "./app/*/*.js"])
        .pipe(jshint({ /* this object represents the JSLint directives being passed down */ }))
        .pipe(jshint.reporter('default'));
});




gulp.task('compress', function () {
    return gulp.src(['./app/*/*.js', './app/app.js'])
        .pipe(uglify({
            compress: {
                drop_console: true
            }
        }))
        .pipe(gulp.dest('dist'))
});






gulp.task('minify', function () {
    return gulp.src(['./app/*/*.js', './app/app.js'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('uglify.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify'], function () {});
