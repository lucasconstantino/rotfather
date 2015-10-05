/**
 * Watch for changes to run corresponding tasks.
 */

var gulp = require('gulp');

gulp.task('watch', ['sass', 'html', 'scripts'], function(){
	gulp.watch('src/sass/**/*.scss', ['sass'] );
	gulp.watch('src/views/**/*.jade', ['html'] );
	gulp.watch('src/js/**/*.js', ['scripts'] );
});
