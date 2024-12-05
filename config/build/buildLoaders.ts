import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] { // тип для правил, для лоадеров

  const typeScriptliader = { // выносим в отд переменную чтобы видеть последовательность лоадеров
    test: /\.tsx?$/, // отлавливает ts и tsx 
    use: 'ts-loader',
    exclude: /node_modules/, // исключение
  };
  return [
    typeScriptliader, // правила для обработки любых файлов, которые не .js
  ];
}
