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
// Gif task
function gifTask() {
    return src('src/assets/*.gif',  { sourcemaps: false })
    .pipe(dest('dist/assets', { sourcemaps: '.' } ));
}

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
    gifTask,
    htmlTask,
    imgTask,
    browsersyncServe,
    watchTask
);