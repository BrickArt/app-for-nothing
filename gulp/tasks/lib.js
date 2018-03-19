module.exports = function () {
    $.gulp.task('lib', () => {
        return $.gulp.src('src/static/lib/**/*.**')
            .pipe($.gulp.dest('build/static/lib/'))
            .on('end', $.browserSync.reload);
    });
}