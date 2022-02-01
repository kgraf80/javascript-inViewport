const path = require('path');

module.exports = {
    mode: 'production',
    // mode: 'development',
    devtool: 'source-map',
    entry: './inviewport.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // transpileOnly: true,
                    }
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'output-wp'),
        filename: 'inviewport.min.js',
        library: {
            name: "javascript-inviewport",
            type: "umd",
            umdNamedDefine: true,
        },

    },
};