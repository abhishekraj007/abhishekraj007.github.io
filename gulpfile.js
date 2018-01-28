'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var babel = require('gulp-babel');
var livereload = require('gulp-livereload');
var zip = require('gulp-zip');
var rev = require('gulp-rev');
var del = require('del');
var browserSync = require('browser-sync');
var spa = require('browser-sync-spa');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

browserSync.use(spa());

var paths = {
  src: 'src',
  dist: 'dist'
};

var pugFiles = {
  src: paths.src + '/**/*.pug',
  dist: paths.dist,
  watch: paths.src + '/**/*.pug'
}

var htmlFiles = {
  watch: paths.dist + '/**/*.html'
}

var scssFiles = {
  src: paths.src + '/css/main.scss',
  dist: paths.dist + '/css/',
  watch: paths.src + '/css/**/*.scss'
}

var jsFiles = {
  src: paths.src + '/js/**/*.js',
  dist: paths.dist + '/js',
  watch: paths.src + '/js/**/*.js'
}

var assetsFiles = {
  src: paths.src + '/img/**/*.*',
  dist: paths.dist + '/img',
  watch: paths.src + '/img/**/*.*'
}

var zipFiles = {
  src: paths.dist + '/**/*.*',
  dist: './zip/',
  name: 'ov-theme.zip'
}

// Compiles pug
gulp.task('pug', function () {
  gulp.src(pugFiles.src)
    .pipe(pug({
      locals: {},
      pretty: true
    }))
    .pipe(gulp.dest(pugFiles.dist));
});

// Compiles SCSS
gulp.task('sass', function () {
  return gulp.src(scssFiles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(scssFiles.dist))
    .pipe(browserSync.stream());
});

// Compiles Vanilla JS
gulp.task('js', () => {
  return gulp.src(jsFiles.src)
    .pipe(gulp.dest(jsFiles.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Compiles ES6 JS
gulp.task('js:babel', () => {
  return gulp.src(jsFiles.src)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(gulp.dest(jsFiles.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
});
// Compiles Home Js
gulp.task('js:home', () => {
  return gulp.src(['src/js/canvas.js', 'src/js/cyclist.js', 'src/js/terminal.js', 'src/js/home.js', 'src/js/main.js'])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('home.js'))
    .pipe(rename('home.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
// Compiles Latest Js
gulp.task('js:latest', () => {
  return gulp.src(['src/js/anime.min.js', 'src/js/imagesloaded.pkgd.min.js', 'src/js/latest-work.js', 'src/js/main.js'])
    // .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('latest.js'))
    .pipe(rename('latest-work.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(jsFiles.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
});
// Compiles Portfolio Js
gulp.task('js:portfolio', () => {
  return gulp.src(['src/js/classie.js', 'src/js/portfolio.js', 'src/js/main.js'])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('portfolio.js'))
    .pipe(rename('portfolio.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsFiles.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Inits Browser Sync server
function browserSyncServe(done) {
  browserSync.init({
    ghostMode: true,
    notify: true,
    server: {
      baseDir: paths.dist
    },
    open: true
  });
  done();
}

// Simple timeout to deal with Pug compiling lag
function reloadBrowserSyncPug() {
  setTimeout(reloadBrowserSync, 500);
}

// Reload Browser sync
function reloadBrowserSync() {
  browserSync.reload();
}

// Sync Css files
function streamCss() {
  browserSync.stream();
}

// Clean dist dir
function clean() {
  // return del([paths.dist + '/**/*/*.*', paths.dist + '/*', paths.dist]);
}

// Watch Task
gulp.task('watch', [], function () {
  gulp.watch(pugFiles.watch, ['pug', reloadBrowserSyncPug]);
  gulp.watch(scssFiles.watch, ['sass', streamCss]);
  gulp.watch(jsFiles.watch, ['js:home', reloadBrowserSync]);
  gulp.watch(jsFiles.watch, ['js:latest', reloadBrowserSync]);
  gulp.watch(jsFiles.watch, ['js:portfolio', reloadBrowserSync]);
  gulp.watch(assetsFiles.watch, ['moveAssets', reloadBrowserSyncPug]);
});

// [npm run build] Default Task
gulp.task('default', ['clean', 'pug', 'sass', 'js:home', 'js:latest', 'js:portfolio', 'move']);

// [npm run build] Build Task
gulp.task('build', ['default']);

// [npm run serve] Serve Task
gulp.task('serve', ['default', 'watch', 'browsersync']);

// Browsersync Task
gulp.task('browsersync', browserSyncServe);

// Clean Task
gulp.task('clean', clean);

// Move assets task
gulp.task('moveAssets', ['move']);

// Zip dist task
gulp.task('zip', () => {
  return gulp.src(zipFiles.src)
    .pipe(zip(zipFiles.name))
    .pipe(rev())
    .pipe(gulp.dest(zipFiles.dist));
});

// Move all assets task
gulp.task('move', () => {
  return gulp.src(assetsFiles.src)
    .pipe(gulp.dest(assetsFiles.dist));
});