module.exports = function () {
    $.gulp.task('video', () => {
        return $.gulp.src('src/static/video/*.**')
            .pipe($.gulp.dest('build/static/video/'));
    });
}