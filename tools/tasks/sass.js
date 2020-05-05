import sass from 'node-sass';
import fs from 'fs-extra';
import CleanCSS from 'clean-css';
import autoprefixer from 'autoprefixer';
import chalk from 'chalk';
import postcss from 'postcss';

sass.render({
    file: './src/scss/main.scss',
    outFile: './dist/css/style.css',
    sourceMap: true,
    sourceMapContents: true,
    sourceMapEmbed: true
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

        let minified = new CleanCSS({}).minify(res.css).styles;
        return fs.outputFile('./dist/css/style.css', minified);
    }).then(() => {
        console.log(chalk.green("Successfully compiled CSS."));
    }).catch(err => {
        console.log(chalk.red("Failed to compile CSS:"));
        throw err;
    })
});