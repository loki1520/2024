import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] { // тип для правил, для лоадеров
  // npm install sass-loader@12.6.0 sass@1.49.9 webpack@5.69.1 style-loader@3.3.1 css-loader@6.6.0 --save-dev
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  // если бы не использовали TS, то нужно было бы использовать babel-loader
  const typeScriptliader = { // выносим в отд переменную чтобы видеть последовательность лоадеров
    test: /\.tsx?$/, // отлавливает ts и tsx 
    use: 'ts-loader',
    exclude: /node_modules/, // исключение
  };
  return [
    cssLoader,
    typeScriptliader, // правила для обработки любых файлов, которые не .js
  ];
}
