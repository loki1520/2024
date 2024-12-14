import webpack from 'webpack';
import { BuildOptions } from './types/config';
export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // теперь можно не писать расширение при импортах файлов
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'], // для абсолютного пути
    // modules: [path.resolve(__dirname, '../../src'), 'node_modules'],
    // // можно и так, но лучше создавать пути в одном месте как можно выше
    mainFiles: ['index'], // для абсолютного пути
    alias: {
      '@': options.paths.src, // для абсолютного пути (src/ теперь заменяется @)
    },
  };
}
