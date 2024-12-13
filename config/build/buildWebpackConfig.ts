import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

export function  buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return { // webpack.Configuration  для автоокомплита
    mode: mode, //       https://webpack.js.org/configuration/mode/
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js', //       https://webpack.js.org/configuration/output/#outputmodule:~:text=%D0%92%D1%8B%20%D0%BC%D0%BE%D0%B6%D0%B5%D1%82%D0%B5%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8%20%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2%2C%20%D0%BD%D0%B0%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%2C%20%5Bname%5D
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: { // для TS
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    // npm install --save-dev webpack-dev-server@4.7.4 @types/webpack-dev-server@4.7.2    типы не забываем ставить для TS
    devtool: isDev ? 'inline-source-map' : undefined, // отслеживание в каком файле произошла ошибка      https://webpack.js.org/guides/development/#:~:text=js%27%2C%0A%20%20%20%7D%2C%0A%2B-,devtool%3A%20%27inline%2Dsource%2Dmap%27%2C,-plugins%3A%20%5B%0A%20%20%20%20%20new
    devServer: isDev ? buildDevServer(options) : undefined, //дев серв для динамич изменения проекта
  }
}

//       https://webpack.js.org/guides/getting-started/#basic-setup:~:text=npx%20webpack%20%2D%2Dconfig%20webpack.config.js
//       https://webpack.js.org/guides/typescript/#:~:text=npm%20install%20%2D%2Dsave%2Ddev%20typescript%20ts%2Dloader
// поменять webpack.config.js на ts и поставить зависимости      https://webpack.js.org/configuration/configuration-languages/#:~:text=npm%20install%20%2D%2Dsave%2Ddev%20typescript%20ts%2Dnode%20%40types/node%20%40types/webpack
