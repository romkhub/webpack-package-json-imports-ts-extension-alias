const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: 'ts-loader',
        exclude: /node_modules/,
        //options: {
        //  transpileOnly: true,
        //}
      }
    ]
  },
  resolve: {
    extensionAlias: {
      '.js': ['.js', '.ts']
    }
  }
};
