import webpack from 'webpack';
import webpackConfig from '../util/webpack.config';
import chalk from 'chalk';

const log = console.log;
const env = process.env.NODE_ENV || 'development';
const isProd = env !== 'development';

const onCompile = (err, stats) => {
    if (err) {
        log(chalk.red("Error compiling JS:"));
        throw err;
    }

    log(chalk.green("Successfully compiled JS."));
};

const compiler = webpack(webpackConfig(env));

if (!isProd) compiler.watch({}, onCompile);
else compiler.run(onCompile);