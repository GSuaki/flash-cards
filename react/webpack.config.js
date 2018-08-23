const path = require( "path" );
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );

const envs = {
    'production': 'prod',
    'development': 'stage',
    'stage': 'stage'
};

const config = require(`./config/${envs[process.env.NODE_ENV]}.env.js`)

const devMode = process.env.NODE_ENV !== "production";

const plugins = [
    new CleanWebpackPlugin([
        'dist',
        'build'
    ]),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
        { from: 'assets/icons', to: 'assets/icons' }
    ]),
    new webpack.DefinePlugin({
        environment: JSON.stringify(config),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
];

if ( !devMode ) {
    plugins.push( new BundleAnalyzerPlugin( {
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    } ) );
}

module.exports = {
    mode: devMode ? "development" : "production",
    context: path.join( __dirname, "app" ),
    devtool: devMode ? "source-map" : "none",
    entry: {
        app: "./client/client.js"
    },
    resolve: {
        modules: [
            path.resolve( "./app" ),
            "node_modules",
            path.resolve( "./client" )
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "stage-0", "react"]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
                })  
            },
            {
                test: /\.css$/,
                use: [
                  { loader: 'postcss-loader', options: { syntax: 'sugarss' } }
                ]
            },
            {
                test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
            }
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins,
};
