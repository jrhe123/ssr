const nodeExternals = require('webpack-node-externals');
const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: srcPath,
    entry: './server/index.js',
    output: {
        path: distPath,
        filename: 'server.js',
        publicPath: '/assets/',
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['env', {
                            targets: {
                                node: 8,
                            },
                        }],
                    ],
                },
            },
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] })
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader", 
                    "sass-loader" 
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                      disable: true, 
                    },
                  },
                ],
            },
            { 
                test: /\.(woff|woff2|eot|ttf)$/, 
                loader: 'url-loader?limit=100000' 
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
    externals: nodeExternals(),
};
