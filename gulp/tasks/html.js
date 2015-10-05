/**
 * Generate the HTML files.
 */

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('html', function() {
	gulp.src(['./src/views/**/*.jade', '!./src/views/**/layout.jade','!./src/views/**/index.jade', '!./src/views/**/partials/*.jade'])
		.pipe(jade({
			pretty: true,,
			locals:{
				foo: 'bar'
			},
		}))
		.pipe(gulp.dest('./dist/views'));

	gulp.src('./src/en/index.jade')
		.pipe(jade({
			pretty: true,
			locals:{
				foo: 'bar'
			},
		}))
		.pipe(gulp.dest('./dist'));

	gulp.src('./src/br/index.jade')
		.pipe(jade({
			pretty: true,
			locals:{
				foo: 'bar'
			},
		}))
		.pipe(gulp.dest('./dist/views/br'));
});
