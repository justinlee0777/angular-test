var historyFallback = require('connect-history-api-fallback'),
	del = require('del'),
	gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	pump = require('pump'),
	webpack = require('webpack-stream');

var tsProject = plugins.typescript.createProject('tsconfig.json');

gulp.task('build', [ 'compile-sass', 'load-js', 'move-assets' ]);
gulp.task('bundle', [ 'compile-js' ], bundle);
gulp.task('compile-js', compileJS);
gulp.task('compile-sass', compileSASS);
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

function compileJS() {
	return pump([
		gulp.src(['src/*.ts', 'src/**/*.ts']),
		tsProject(),
		gulp.dest('tmp')
		]);
}

function compileSASS() {
	return pump([
		gulp.src('src/**/*.scss'),
		plugins.sass(plugins.sass().on('error', plugins.sass.logError)),
		plugins.concatCss('styles.css'),
		plugins.cleanCss({compatibility: 'ie8'}),
		gulp.dest('build'),
		plugins.livereload()
		]);
}

function createServer() {
	plugins.livereload.listen();
	gulp.watch('src/*.ts', [ 'load-js' ]);
	gulp.watch('src/**/*.scss', [ 'compile-sass' ]);
	gulp.watch([ 'src/**', '!src/**/*.scss', '!src/**/*.js' ], [ 'move-assets' ]);
	pump([
		gulp.src( 'build' ),
		plugins.webserver({
			port: 3000,
			root: ['build'],
			livereload: true,
			middleware: [ historyFallback() ],
			open: true
		})
	]);
}

function moveAssets() {
	return pump([
		gulp.src([ '**', '!**/*.scss', '!**/*.js', '!**/*.ts' ], { cwd: 'src' }),
		plugins.rename({ dirname: '' }),
		plugins.flatten(),
		gulp.dest('build'),
		plugins.livereload()
		]);
}