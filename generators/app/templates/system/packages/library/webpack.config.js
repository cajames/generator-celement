const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const TerserPlugin = require('terser-webpack-plugin')

const { getDirs, getFiles } = require("./bin/utils");

const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
    return path.join(__dirname, folderName);
};

const devMode = process.env.NODE_ENV !== "production";
console.log(`DEVMODE: ${devMode}\n`);

const packages = getDirs(path.join(__dirname, "build", "packages")).reduce(
    (map, package) => {
        return {
            ...map,
            [package]: path.resolve(
                __dirname,
                `./build/packages/${package}/index.js`
            )
        };
    },
    {}
);

const langs = getFiles(
    path.join(__dirname, "build", "packages", "locale", "lang")
).reduce((map, file) => {
    const fileName = file
        .split(".")
        .slice(0, -1)
        .join("_");
    return {
        ...map,
        ["lang-" + fileName]: path.resolve(
            __dirname,
            `./build/packages/locale/lang/${file}`
        )
    };
}, {});

const indexPath = path.resolve(__dirname, "./src/index.js");
packages.index = indexPath;

const entry = {
    ...packages,
    ...langs
};

const extractCSS = new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "[id].css"
});
const postCssLoader = {
    loader: "postcss-loader",
    options: {
        config: {
            path: "./postcss.config.js"
        }
    }
};

const babelConfig = {
    // sourceType: "unambiguous",
    presets: ["@babel/preset-env"],
    plugins: [
        // "@babel/plugin-syntax-dynamic-import",
        // "@babel/plugin-transform-runtime"
    ]
};

const config = {
    /**
     * You can use these too for bigger projects. For now it is 0 conf mode for me!
     */
    entry,
    output: {
        path: setPath("lib"), //this one sets the path to serve
        filename: "[name].js",
        libraryTarget: "umd"
    },

    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
            // new TerserPlugin({
            //   parallel: true,
            //   terserOptions: {
            //     ecma: 6
            //   }
            // })
        ]
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@/*": "src/*",
            "#/*": "build/*"
        },
        plugins: []
    },
    resolveLoader: {
        modules: [path.join(__dirname, "..", "..", "node_modules")]
    },

    // Externals check
    externals: [
        nodeExternals(),
        nodeExternals({
            modulesDir: path.resolve(__dirname, "../../node_modules"),
            whitelist: [/\.s?css$/]
        })
    ],

    mode: devMode ? "development" : "production",
    plugins: [
        new ProgressBarPlugin(),
        extractCSS,
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"' + NODE_ENV + '"'
            }
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: babelConfig
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    postCssLoader
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    postCssLoader,
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: path.posix.join("img", "[name].[ext]")
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "file-loader",
                options: {
                    limit: 10000,
                    publicPath: "fonts/",
                    outputPath: "css/fonts/",
                    name: "[name].[ext]"
                }
            }
        ]
    }
};

const commonJSConfig = {
    ...config,
    entry: {
        index: indexPath
    },
    output: {
        path: setPath("lib"), //this one sets the path to serve
        filename: "[name].cjs.js",
        libraryTarget: "commonjs2"
    }
};

module.exports = [config, commonJSConfig];
