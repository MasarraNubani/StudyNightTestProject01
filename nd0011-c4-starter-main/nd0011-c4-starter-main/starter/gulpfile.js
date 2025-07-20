import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("parcel", shell.task(["parcel index.html --open"]));
gulp.task("build", shell.task(["parcel build index.html"]));
gulp.task("test", shell.task(["npx mocha"]));
gulp.task("cypress", shell.task(["npx cypress run"]));
gulp.task("default", gulp.series("parcel"));
