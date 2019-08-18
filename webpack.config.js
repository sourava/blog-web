const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
        HomePage: path.resolve(__dirname, 'src/pages/home/HomePageContainer.js'),
        PostPage: path.resolve(__dirname, 'src/pages/post/PostContainer.js'),
        PostsPage: path.resolve(__dirname, 'src/pages/posts/PostsContainer.js'),
        ProfilePage: path.resolve(__dirname, 'src/pages/profile/ProfilePageContainer.js'),
        AddPostPage: path.resolve(__dirname, 'src/pages/post/addPost/AddPostContainer.js'),
        EditPostPage: path.resolve(__dirname, 'src/pages/post/editPost/EditPostContainer.js'),
        SearchPage: path.resolve(__dirname, 'src/pages/search/SearchPageContainer.js'),
        ApprovalPage: path.resolve(__dirname, 'src/pages/approval/ApprovalPageContainer.js'),
        LoginPage: path.resolve(__dirname, 'src/pages/auth/LoginPageContainer.js'),
        SignupPage: path.resolve(__dirname, 'src/pages/auth/SignUpPageContainer.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CompressionPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: './src/index.html',
            chunks: ['main', 'HomePage','PostPage','PostsPage','ProfilePage','AddPostPage','EditPostPage','SearchPage','ApprovalPage','LoginPage','SignupPage', 'vendor'],
            filename: 'index.html'
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
            },
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
};