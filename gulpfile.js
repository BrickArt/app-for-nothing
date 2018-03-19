'use strict';

global.$ = {
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config')
    }
}

$.path.tasks.forEach(task => {
    require(task)();
});

$.gulp.task('default',
    $.gulp.series(
        'clean',
        $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:dev', 'svg:copy', 'svg', 'fonts', 'video', 'lib'),
        $.gulp.parallel('watch', 'browser-sync'))
);

$.gulp.task('build',
    $.gulp.series(
        'clean',
        $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:build', 'svg:copy', 'svg', 'fonts', 'video', 'lib'),
        $.gulp.parallel('watch', 'browser-sync'))
);