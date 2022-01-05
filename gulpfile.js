const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const imageminJpegtran = require('imagemin-jpegtran');

const browsersync = require('browser-sync').create();

// Sass task
function scssTask() {
    return src('src/sass/main.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist/css', { sourcemaps: '.' }));
}
// Css task
// function cssTask() {
//     return src('src/css/*.css', { sourcemaps: true })
//     .pipe(dest('dist/css', { sourcemaps: '.' }));
// }

// Html task
function htmlTask() {
    return src('src/*.html', { sourcemaps: false })
    .pipe(dest('dist', { sourcemaps: '.' }));
}

//Images task
async function imgTask() {
    const imagemin = (await import ('imagemin')).default;
    const files = await imagemin(['src/images/*.{jpg,png,svg,gif,ico,webp}'], {
        destination: 'dist/images',
        plugins: [imageminJpegtran()]
    });
}
// Images design task
async function designTask() {
    const imagemin = (await import('imagemin')).default;
    const files = await imagemin(['src/design/*.{jpg,png,svg,gif,ico,webp}'], {
        destination: 'dist/design',
        plugins: [imageminJpegtran()]
    });
}
//Browser tasks
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
} 

//Watch Task
function watchTask() {
    watch('src/*.html', series(htmlTask, browsersyncReload));
    watch('src/images/*.{jpg,png,svg,gif,ico,webp}', series(imgTask, browsersyncReload));
    watch(['src/sass/**/*.scss'], series(scssTask, browsersyncReload));
}

exports.default = series(
    scssTask,
    // cssTask,
    htmlTask,
    imgTask,
    browsersyncServe,
    watchTask
);