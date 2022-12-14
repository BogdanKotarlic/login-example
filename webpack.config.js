const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry:"./src/index.js",
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader:'babel-loader'
                }
            },   
            {
                test: /\.html$/,
                use: {
                    loader:'html-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }   
        ] 
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        }),
        new CopyWebpackPlugin({ 
            patterns:[
              {from: 'src/images', to:'images'}
            ]
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        }),
        new Dotenv()
    ],
    devServer:{
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
        historyApiFallback:true,
        open: true
    }
}