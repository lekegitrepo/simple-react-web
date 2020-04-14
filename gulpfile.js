'use strict';

const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const {dest, series, src, watch} = require('gulp');

const SCSS_SRC = './src/assets/scss/*.scss';
const SCSS_DEST = './src/assets/css';

function compileScss(){
  return src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS()).pipe(rename({ suffix: '.min' }))
  .pipe(changed(SCSS_DEST))
  .pipe(dest(SCSS_DEST));
}

exports.build = compileScss

exports.default = watch(SCSS_SRC, series(compileScss));
