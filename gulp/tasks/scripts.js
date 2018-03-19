var concat = require('gulp-concat');

module.exports = function() {
    $.gulp.task('scripts:lib', function(){
        return $.gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/svg4everybody/dist/svg4everybody.min.js',
            'src/scripts/lib/*.js'
            ])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts', function(){
        return $.gulp.src('src/static/js/main.js')
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
}