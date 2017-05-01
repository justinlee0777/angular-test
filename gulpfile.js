var del = require('del'),
	gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	pump = require('pump'),
	webpack = require('webpack-stream');

var tsProject = plugins.typescript.createProject('tsconfig.json');

gulp.task('build', ['load-js', 'move-assets']);
gulp.task('bundle', [ 'compile' ], bundle);
gulp.task('compile', compile);
gulp.task('load-js', [ 'bundle' ], clean);
gulp.task('move-assets', moveAssets);
gulp.task('serve', [ 'build' ], createServer);

function bundle() {
	return pump([
		gulp.src('tmp/main.js'),
		webpack(),
		plugins.rename({
			basename: 'bundle',
			extname: '.js'
		}),
		plugins.uglify(),
		gulp.dest('build'),
		plugins.livereload()
		]);
}

function clean() {
	del('tmp');
}

function compile() {
	return pump([
		gulp.src(['src/*.ts', 'src/**/*.ts']),
		tsProject(),
		gulp.dest('tmp')
		]);
}

function createServer() {
	plugins.livereload.listen();
	gulp.watch('src/*.ts', [ 'load-js' ]);
	gulp.watch([ 'src/**', '!src/**/*.js' ], [ 'move-assets' ]);
	pump([
		gulp.src( 'build' ),
		plugins.webserver({
			port: 3000,
			root: ['build'],
			livereload: true,
			open: true
		})
	]);
}

function moveAssets() {
	return pump([
		gulp.src([ '**', '!**/*.js', '!**/*.ts' ], { cwd: 'src' }),
		plugins.rename({ dirname: '' }),
		plugins.flatten(),
		gulp.dest('build'),
		plugins.livereload()
		]);
}