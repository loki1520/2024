import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    // тип возвращает массив плагинов
    // не имеет значения в каком порядке добавлять плагины, в отличии от лоадеров!!
    const plugins: webpack.WebpackPluginInstance[] = [
        // для сборки HTML     https://webpack.js.org/plugins/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: paths.html,
        }), // если HtmlWebpackPlugin вызвать без аргумента, то в собранном html не будет виден основной ДИВ РУУТ для просмотра времени сборки
        // https://webpack.js.org/concepts/plugins/#:~:text=new%20HtmlWebpackPlugin(%7B%20template%3A%20%27./src/index.html%27%20%7D)%2C
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // добавляет переменную __IS_DEV__ прокидывая ее во все скрипты с помощью DefinePlugin
        // https://webpack.js.org/plugins/define-plugin/
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        // Hot Module Replacement (HMR)
        // https://webpack.js.org/concepts/hot-module-replacement изменение файлов без перезагрузки браузера
        // new webpack.HotModuleReplacementPlugin(),
    ];

    // Добавление плагинов для разработки
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
