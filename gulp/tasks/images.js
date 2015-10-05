/**
 * Copy static image files to distribution path.
 */

var gulp = require('gulp');

gulp.task('images', function () {
  return gulp.src('src/imgs/**/*')
    .pipe(gulp.dest('./dist/imgs'));
});
