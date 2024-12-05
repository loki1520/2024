import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPath } from './config/build/types/config';

const paths: BuildPath = {
  entry: path.resolve(__dirname, 'src', 'index.ts'), // для создания абсолют пути, Директория, где находится текущий файл (__dirname).
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';

const config = buildWebpackConfig( // декомпозируем все в отд функцию
  {
    mode: 'development',
    paths: paths,
    isDev,
  }
);

export default config;
