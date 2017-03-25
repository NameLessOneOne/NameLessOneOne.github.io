var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var uglifycss = require('gulp-uglifycss');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('clean', function() {
    return gulp.src('build', {
            read: false
        })
        .pipe(clean());
});

gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['sass']);
});


// gulp.task('concatCss', function() {
//     return gulp.src('css/*.css')
//         .pipe(concatCss("main.css"))
//         .pipe(gulp.dest('build/css/'));
//
// });
//
//
// gulp.task('concatJS', function() {
//     return gulp.src('js/*.js')
//         .pipe(concat('main.js', {
//             newLine: ';'
//         }))
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('build/js'));
// });


// gulp.task('compressJS', ['concatJS'] , function (cb) {
//   pump([
//         gulp.src('build/js/*.js'),
//         uglify(),
//         gulp.dest('build/js/min')
//     ],
//     cb
//   );
// });

// gulp.task('compressCSS', ['concatCss'] , function () {
//   gulp.src('./build/css/*.css')
//     .pipe(uglifycss({
//       "maxLineLen": 80,
//       "uglyComments": true
//     }))
//     .pipe(gulp.dest('./build/css/min'));
// });



// gulp.task('stream', function () {
//     // Endless stream mode
//     return watch('sass/*.scss', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });

gulp.task('default', ['clean', 'watch']);
