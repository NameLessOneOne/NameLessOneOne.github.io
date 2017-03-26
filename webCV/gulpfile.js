var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

// var concatCss = require('gulp-concat-css');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var pump = require('pump');
// var uglifycss = require('gulp-uglifycss');
// var clean = require('gulp-clean');


gulp.task('sass', function () {
  return gulp.src('sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['sass'], function() {
  // place code for your default task here
});



// gulp.task('clean', function () {
//     return gulp.src('build', {read: false})
//         .pipe(clean());
// });

// gulp.task('concatCss', function() {
//     return gulp.src('css/*.css')
//         .pipe(concatCss("main.css"))
//         .pipe(gulp.dest('build/css/'));
//
// });


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

// gulp.task('default', ['clean', 'compressJS', 'compressCSS']);
