const path = require("path");
const aliases = require("../aliases").default;

const alias = Object.keys(aliases).reduce( ( acc, key ) => {
    if ( !aliases['root'] ) {
        throw new Error('Alias need a root key to work.')
    }

    acc[key] = path.join(aliases['root'], aliases[key]);

    return acc;
}, {});

const webpackConfig = env => {
    const isProd = env !== 'development';

    const options = {
        mode: process.env.NODE_ENV,
        entry: path.join(process.cwd(), './src/js/index.js'),
        output: {
            filename: `bundle${ isProd ? '.min' : '' }.js`,
            path: path.join(process.cwd(), './dist/js')
        },
        resolve: { alias },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            ]
        }
    };
    if (env === 'development') options.watch = true;

    return options;
};

export default webpackConfig;