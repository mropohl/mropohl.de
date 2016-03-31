// require gulp
var gulp = require('gulp');

// require other packages
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var del = require('del');
var cache = require('gulp-cache');
var jade = require('gulp-jade');
var htmlmin = require('gulp-htmlmin');

// default task
gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'images', 'templates');
});

// watch task
gulp.task('watch', function() {
    // Watch .jade files
    gulp.watch('src/jade/*.jade', ['templates']);
    // Watch .sass files
    gulp.watch('src/assets/css/2-components/*.sass', ['styles']);
    // Watch .js files
    gulp.watch('src/assets/js/*.js', ['scripts']);
    // Watch image files
    gulp.watch('src/asstes/images/**/*', ['images']);
    // Create LiveReload server
    livereload.listen();
    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);
});

// scripts task
gulp.task('scripts', function() {
    return gulp.src("./src/assets/js/*.js")
        .pipe(concat("main.js"))
        .pipe(gulp.dest("./dist/assets/js/"))
        .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
        .pipe(rename( {suffix: ".min"} ))
        .pipe(gulp.dest("./dist/assets/js/"));
});

// styles task
gulp.task("styles", function() {
    return gulp.src("./src/assets/css/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("./dist/assets/css/"))
        .pipe(cssmin())
        .pipe(rename( {suffix: ".min"} ))
        .pipe(gulp.dest("./dist/assets/css/"));
});

// templates task
gulp.task("templates", function() {
    return gulp.src("./src/jade/*.jade")
        .pipe(jade())
        .pipe(gulp.dest("./dist/"))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./dist/"));
});

// images task
gulp.task('images', function() {
  return gulp.src('src/assets/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/assets/images'));
});

// clean task
gulp.task('clean', function() {
    return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/images']);
});
