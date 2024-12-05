import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

// https://webpack.js.org/guides/environment-variables/
// чтобы запускать с опред параметрами, по доке необходимо теперь не экспортировать сонфиг,
// а импортировать функцию, которая аргументами и принимает эти переменные окружения
// мы возвращаем тот же конфиг, но только через прослойку функции чтобы подставить доп аргументы
// export default config;
export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'), // для создания абсолют пути, Директория, где находится текущий файл (__dirname).
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  
  const mode = env.mode || 'development'; 
  const PORT = env.port ||  3000;
  
  const isDev = mode === 'development';

  const config = buildWebpackConfig( // декомпозируем все в отд функцию
    {
      mode: mode,
      paths: paths, 
      isDev, 
      port: PORT,
    }
  );

  return config;
};
