/**
 * Development environment.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('develop', ['watch', 'browser-sync']);
