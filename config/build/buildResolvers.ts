import webpack from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';
export function buildResolvers(opt: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [path.resolve(opt.paths.src), 'node_modules'],
    // modules: [path.resolve(__dirname, '../../src'), 'node_modules'],
    // // можно и так, но лучше создавать пути в одном месте как можно выше
    mainFiles: ['index'],
    alias: {},
  };
}
