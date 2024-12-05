import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server"; // в доке Configuration, чтобы небыло конфликтов, меняем название

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    
  }

}