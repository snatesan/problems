var gulp = require("gulp"),
	mocha = require("gulp-mocha"),
	gutil = require("gulp-util"),
	jshint = require("gulp-jshint"),
	libsrc = "lib/*.js",
	testsrc = "test/*.js";

gulp.task("default", function() {
});

gulp.task("test", ["lint"], function() {
	return gulp.src(testsrc, { read: false })
		.pipe(mocha({
			globals: {
				should: require("should")
			}
		}))
		.on("error", gutil.log);
});

gulp.task("watch-test", function() {
	gulp.watch([libsrc, testsrc], ["test"]);
});

gulp.task("lint", function() {
	return gulp.src([libsrc, testsrc])
		.pipe(jshint({ 
			node: true,
			predef: [ "describe", "it" ]
		}))
		.pipe(jshint.reporter("jshint-stylish"))
		.pipe(jshint.reporter("fail"));
});

