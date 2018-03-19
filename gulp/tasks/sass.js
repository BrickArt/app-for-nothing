var sass         = require('gulp-sass'),
    csso         = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    notify       = require('gulp-notify'),
    sourcemaps   = require('gulp-sourcemaps');

module.exports = function() {
    $.gulp.task('sass', function(){
        return $.gulp.src('src/static/sass/*.sass')
            .pipe(sourcemaps.init())
            .pipe(sass({
                'include css': true
            }))
            .pipe(autoprefixer({
                browsers: ['last 10 version']
            }))
            .on('error', notify.onError({
                title: "stile"
            }))
            .pipe(csso())
            .pipe(sourcemaps.write())
            .pipe($.gulp.dest('build/stylesheets'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
}