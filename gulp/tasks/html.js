/**
 * Generate the HTML files.
 */

var gulp = require('gulp');
var jade = require('gulp-jade');
var rename = require("gulp-rename");
var requireDir = require('require-dir');
var browserSync = require('browser-sync');

var pages = {
	'index': 		'',
	'game': 		'game',
	'products': 'products',
	'project': 	'project'
}, page;

var languages = requireDir(process.cwd() + '/src/i18n');
var defaultLanguage = 'pt-br';

gulp.task('html', function() {
	Object.keys(languages).forEach(function (language) {
		var root = './dist/' + language + '/';

		Object.keys(pages).forEach(function (page) {
			var stream = gulp.src('./src/views/' + page + '.jade')
				.pipe(jade({
					pretty: true,
					locals: languages[language]
				}))
				.pipe(rename('index.html'))
				.pipe(gulp.dest(root + pages[page]));

			if (language == defaultLanguage) {
				stream.pipe(gulp.dest('./dist/' + pages[page]));
			}
		});
	});

	setTimeout(function () {
		browserSync.reload();
	}, 1000);
});
