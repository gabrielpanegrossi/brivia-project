const { src, dest, watch } = require('gulp');
const compileSass = require('gulp-sass')(require('node-sass'));
const minifyCss = require('gulp-clean-css');
const minify = require('gulp-minify');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const bundleSass = () => {
	return src('./static/dist/sass/**/*.scss')
		.pipe(sourceMaps.init())
		.pipe(compileSass().on('error', compileSass.logError))
		.pipe(minifyCss())
		.pipe(sourceMaps.write())
		.pipe(concat('bundle.css'))
		.pipe(dest('./static/dist/css/'));
};

function minifyJs() {
	return src('./static/assets/js/changePlan.js', { allowEmpty: true })
		.pipe(minify({ noSource: true }))
		.pipe(dest('./static/dist/js'));
}

const devWatch = () => {
	watch('./static/dist/sass/**/*.scss', bundleSass);
};

exports.bundleSass = bundleSass;
exports.minifyJs = minifyJs;
exports.devWatch = devWatch;
