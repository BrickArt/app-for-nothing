var tinypng = require('gulp-tinypng-compress');

module.exports = function() {
    $.gulp.task('img:build', function () {
        $.gulp.src('src/static/img/*.{png,jpg,jpeg}')
            .pipe(tinypng({
                key: 'API_KEY',
                sigFile: 'src/static/img/*.tinypng-sigs',
                log: true
            }))
            .pipe($.gulp.dest('build/static/img'));
    });

    $.gulp.task('img:dev', () => {
        return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/static/img/'));
    });

    $.gulp.task('svg:copy', () => {
        return $.gulp.src('src/static/img/general/*.svg')
            .pipe($.gulp.dest('build/static/img/general/'));
    });
}