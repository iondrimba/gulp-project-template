﻿var gulp = require('gulp');
var sass = require('gulp-sass');
module.exports = function() {
    gulp.src('./src/css/app.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'));
};