const webpack = require('webpack')

const CWD = process.cwd()

module.exports = {
    entry: {
        FetchPlusPonyfill: './src/FetchPlusPonyfill',
        FetchPlus: './src/FetchPlus',
    },
    output: {
        path: `${CWD}/dist`,
        library: 'FetchPlus',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/i,
            loader: 'babel-loader',
            options: {
                "presets": [
                    ["@babel/preset-env", {
                        "targets": "last 2 versions"
                    }]
                ]
            }
        }]
    },
    optimization: {
        minimize: false
    }
}