var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    watch   = require('gulp-watch'),
    plumber = require('gulp-plumber');

gulp.task('sass-compile', function(){
    gulp.src('css/**.scss')
    .pipe(plumber())
    .pipe(watch('css/**.scss'))
    .pipe(sass())
    .pipe(gulp.dest('build/css'));
});

gulp.task('sanitize', function(){
    gulp.src('css/vendor/*.css')
    .pipe(gulp.dest('build/css/vendor'));
});

gulp.task('html', function(){
    gulp.src('./*.html')
    .pipe(watch('./*.html'))
    .pipe(gulp.dest('build/'));
});

gulp.task('js', function(){
    gulp.src('js/**/*.js')
    .pipe(watch('js/**/*.js'))
    .pipe(gulp.dest('build/js'));
})

gulp.task('default', ['sass-compile', 'sanitize', 'js', 'html']);