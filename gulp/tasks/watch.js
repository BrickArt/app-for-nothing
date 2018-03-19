module.exports = function() {
    $.gulp.task('watch', function(){
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/static/sass/**/*.sass', $.gulp.series('sass'));
        $.gulp.watch('src/static/js/main.js', $.gulp.series('scripts'));
        $.gulp.watch('src/static/img/*.{png,jpg,jpeg}', $.gulp.series('img:dev'));
        $.gulp.watch('src/static/img/general/*.svg', $.gulp.series('svg:copy'));
        $.gulp.watch('src/static/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('src/static/video/*.**', $.gulp.series('video'));
        $.gulp.watch('src/static/lib/**/*.**', $.gulp.series('lib'));
        
    });
}