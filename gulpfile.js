const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('node-sass'));
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const bundleSass = () => {
	return src('./static/sass/**/*.scss')
		.pipe(sourceMaps.init())
		.pipe(compileSass().on('error', compileSass.logError))
		.pipe(minifyCss())
		.pipe(sourceMaps.write())
		.pipe(concat('bundle.css'))
		.pipe(dest('./static/css/'));
};

const devWatch = () => {
	watch('./static/sass/**/*.scss', bundleSass);
};

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
