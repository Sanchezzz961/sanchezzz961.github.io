var gulp = require('gulp');
    pug = require('gulp-pug');
    imagemin = require('gulp-imagemin');
    stylus = require('gulp-stylus');
    jsmin = require('gulp-minify');
    del = require('del');

gulp.task('html', function buildHTML() {
  return gulp.src('source/pug/index.pug')
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('output/'))
});

gulp.task('images', function () {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('output/img'));
});

gulp.task('css', function () {
  return gulp.src('source/css/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('output/css'))
});

gulp.task('js', function () {
  return gulp.src('source/js/*.js')
    //.pipe(jsmin())
    .pipe(gulp.dest('output/js'))
});

gulp.task('clean', function () {
  return del('output');
});

gulp.task('watch', function(){
  gulp.watch('source/css/**/*.styl', gulp.series('css'));
  gulp.watch('source/pug/**/*.pug', gulp.series('html'));
  gulp.watch('source/js/**/*.js', gulp.series('js'));
  gulp.watch('source/img/**/*.svg', gulp.series('images'));
});

gulp.task('default', gulp.series('clean', 'html','images', 'css', 'js'));