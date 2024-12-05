//       https://webpack.js.org/guides/getting-started/#basic-setup:~:text=%7C%2D%20index.js-,webpack.config.js,-const%20path%20%3D
import path from 'path';
//       https://webpack.js.org/concepts/#plugins:~:text=const%20HtmlWebpackPlugin%20%3D%20require(%27html%2Dwebpack%2Dplugin%27)%3B
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] { // тип возвращает массив плагинов

  return [  
    // для сборки HTML     https://webpack.js.org/plugins/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: paths.html,
    }), // если HtmlWebpackPlugin вызвать без аргумента, то в собранном html не будет виден основной ДИВ РУУТ
    // для просмотра времени сборки      https://webpack.js.org/concepts/plugins/#:~:text=new%20HtmlWebpackPlugin(%7B%20template%3A%20%27./src/index.html%27%20%7D)%2C
    new webpack.ProgressPlugin(),
  ];
}
