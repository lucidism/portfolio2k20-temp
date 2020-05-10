import sass from 'node-sass';
import fs from 'fs-extra';
import CleanCSS from 'clean-css';
import autoprefixer from 'autoprefixer';
import chalk from 'chalk';
import postcss from 'postcss';
import chokidar from 'chokidar';

const isProd = process.env.NODE_ENV !== 'development';

const compile = () => {
    setTimeout(() => {
        sass.render({
            file: './src/scss/main.scss',
            outFile: `./dist/css/style${ isProd ? '.min' : '' }.css`,
            sourceMap: !isProd,
            sourceMapContents: !isProd,
            sourceMapEmbed: !isProd
        }, (err, result) => {
            if (err) {
                console.log(chalk.red("Error compiling CSS."));
                console.log(err);
                return;
            }

            // postcss
            postcss([ autoprefixer ]).process(result.css.toString()).then(res => {
                res.warnings().forEach(warn => {
                    console.warn(warn.toString());
                });

                let minified = isProd ? new CleanCSS({}).minify(res.css).styles : res.css;
                return fs.outputFile(`./dist/css/style${ isProd ? '.min' : '' }.css`, minified);
            }).then(() => {
                console.log(chalk.green("Successfully compiled CSS."));
            }).catch(err => {
                console.log(chalk.red("Failed to compile CSS:"));
                throw err;
            });
        });
    }, 200);
};

if (!isProd) {
    const watcher = chokidar.watch('./src/scss', {
        ignored: /[\/\\]\./, persistent: true
    });
    watcher.on('ready', () => {
        watcher.on('add', compile);
        compile();
    });

    watcher.on('change', compile);
    watcher.on('unlink', compile);
} else {
    compile();
}