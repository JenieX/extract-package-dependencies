const gulp = require('gulp');
const del = require('del');
const modifyContent = require('gulp-modifier');
const rename = require('gulp-rename');

/**
 * @typedef {object} PackageJson
 * @property {Record<string, string>} [dependencies]
 * @property {Record<string, string>} [devDependencies]
 */

function cleanTask() {
  return del('output');
}

function extractDependenciesTask() {
  return gulp
    .src('./input/package.json')
    .pipe(
      modifyContent((content) => {
        // Throwing an error here wouldn't work because it gets caught!

        /** @type {PackageJson} */
        const { dependencies } = JSON.parse(content);

        if (!dependencies) {
          return '';
        }

        return `pnpm i ${Object.keys(dependencies).join(' ')}`;
      }),
    )
    .pipe(
      rename((pathObject) => {
        return {
          ...pathObject,
          basename: 'dependencies',
          extname: '.txt',
        };
      }),
    )
    .pipe(gulp.dest('output'));
}

function extractDevDependenciesTask() {
  return gulp
    .src('./input/package.json')
    .pipe(
      modifyContent((content) => {
        // Throwing an error here wouldn't work because it gets caught!

        /** @type {PackageJson} */
        const { devDependencies } = JSON.parse(content);

        if (!devDependencies) {
          return '';
        }

        return `pnpm i -D ${Object.keys(devDependencies).join(' ')}`;
      }),
    )
    .pipe(
      rename((pathObject) => {
        return {
          ...pathObject,
          basename: 'dev-dependencies',
          extname: '.txt',
        };
      }),
    )
    .pipe(gulp.dest('output'));
}

exports.default = gulp.series(
  cleanTask,
  gulp.parallel(extractDependenciesTask, extractDevDependenciesTask),
);

/* Set timer only if `node` started with a flag, `inspect-wait` in this case. */
if (process.execArgv.length > 0) {
  setTimeout(() => {}, 60 * 1000 * 30);
}
