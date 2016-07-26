const gulp = require('gulp');
const ava = require('gulp-ava');

gulp.task('default', () => {
    gulp.src('test/**/*.js')
        .pipe(ava())
});