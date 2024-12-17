import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // тип для правил, для лоадеров
    // https://www.npmjs.com/package/@svgr/webpack
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // https://v4.webpack.js.org/loaders/file-loader/
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i, // также добавим сразу и шрифты woff2|woff
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // npm install sass-loader@12.6.0 sass@1.49.9 webpack@5.69.1 style-loader@3.3.1 css-loader@6.6.0 --save-dev
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            // "css-loader" убираем и настроим с помощью https://webpack.js.org/loaders/css-loader/#modules
            // можно передать объек а не строку:
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    // если бы не использовали TS, то нужно было бы использовать babel-loader
    const typeScriptliader = {
    // выносим в отд переменную чтобы видеть последовательность лоадеров
        test: /\.tsx?$/, // отлавливает ts и tsx
        use: 'ts-loader',
        exclude: /node_modules/, // исключение
    };

    return [
        svgLoader,
        fileLoader,
        cssLoader,
        typeScriptliader, // правила для обработки любых файлов, которые не .js
    ];
}
