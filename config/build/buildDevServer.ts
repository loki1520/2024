import { BuildOptions } from "./types/config";
//     https://github.com/webpack/webpack-dev-server?tab=readme-ov-file#with-typescript:~:text=import%20type%20%7B%20Configuration%20as%20DevServerConfiguration%20%7D%20from%20%22webpack%2Ddev%2Dserver%22%3B
import { Configuration as DevServerConfiguration } from "webpack-dev-server"; // в доке Configuration, чтобы небыло конфликтов, меняем название

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, // автоматически открывать браузер
    historyApiFallback: true, // для поддержки React Router     https://github.com/webpack/webpack-dev-server?tab=readme-ov-file#with-typescript:~:text=%2D%2Dhistory%2Dapi%2Dfallback%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Allows%20to%20proxy%20requests%20through%20a%20specified%20index%20page%20(by%20default%20%27index.html%27)%2C%20useful%20for%20Single%20Page%20Applications%20that%20utilise%20the%20HTML5%20History%20API.
    hot: true, // Hot Module Replacement (HMR) https://webpack.js.org/concepts/hot-module-replacement изменение файлов без перезагрузки браузера
  }
}
