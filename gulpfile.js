
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	jade = require('gulp-jade'),
	browserify = require('gulp-browserify'),
	rename = require('gulp-rename');
	nodemon = require('gulp-nodemon');

gulp.task('default',['watch'], function(){
	nodemon({
		script: 'index.js',
	}).on('SIGUSR2', function(){
		process.kill(process.pid, 'SIGUSR2');
	})
});

gulp.task('bundleJS', function(){
	gulp.src('./src/js/main.js')
		.pipe(browserify())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('template', function(){
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

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch',['sass', 'template','bundleJS'], function(){
	gulp.watch('src/sass/**/*.scss', ['sass'] );
	gulp.watch('src/views/**/*.jade', ['template'] );
	gulp.watch('src/js/**/*.js', ['bundleJS'] );
});