const gulp = require('gulp')
const sass = require("gulp-sass")(require("node-sass"));
const minify = require('gulp-minify') 

gulp.task('styles', () =>{
    return gulp.src('./src/scss/style.scss')
    .pipe(sass({outputStyle : 'compressed'}).on('erroe', sass.logError))
    .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', () =>{
    return gulp.watch('./src/scss/**/*.scss', (done) => {
        gulp.series(['styles']) (done)
    })
})