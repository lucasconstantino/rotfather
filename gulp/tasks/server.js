/**
 * Serve up the project.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', ['build'], function() {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
});
