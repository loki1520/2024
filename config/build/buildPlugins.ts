import HtmlWebpackPlugin from 'html-webpack-plugin'; // Плагин для создания HTML-файла и подключения к нему бандлов
import webpack from 'webpack'; // Базовая библиотека Webpack для работы с плагинами и конфигурацией
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; // Плагин для выделения CSS в отдельные файлы
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'; // Плагин для анализа размера бандлов
import { BuildOptions } from './types/config'; // Типизация для опций сборки

export function buildPlugins({
    paths, // Пути к различным файлам и папкам проекта
    isDev, // Флаг, указывающий, режим разработки (true) или production (false)
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        // Плагин для генерации HTML-файла, в который автоматически подключаются сгенерированные бандлы
        new HtmlWebpackPlugin({
            template: paths.html, // Шаблон HTML, который будет использоваться
        }),
        // Плагин для отображения прогресса сборки в консоли
        new webpack.ProgressPlugin(),
        // Плагин для выделения CSS в отдельные файлы
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css', // Имя итогового CSS-файла
            chunkFilename: 'css/[name].[contenthash:8].css', // Имя файлов для чанков
        }),
        // Плагин для определения глобальных констант, используемых в коде
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev), // Добавление глобальной переменной __IS_DEV__ для проверки режима разработки
        }),
    ];

    if (isDev) {
        // Плагин для поддержки "горячей замены модулей" (HMR) в режиме разработки
        plugins.push(new webpack.HotModuleReplacementPlugin());
        // Плагин для анализа размера бандлов, автоматически добавляется в режиме разработки
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false, // Отключает автоматическое открытие анализа в браузере
            }),
        );
    }

    return plugins; // Возвращаем массив плагинов для Webpack
}
