// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./assets/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
   // gulp.src(['your','source','files'])
       // .pipe(gulp.dest('output folder'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./assets/css/*.scss', ['sass']);
})