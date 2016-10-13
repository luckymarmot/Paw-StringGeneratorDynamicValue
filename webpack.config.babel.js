import webpack from 'webpack'
import path from 'path'
import DynamicValue from './src/DynamicValue'

if (!DynamicValue.identifier) {
    let msg = 'DynamicValue requires an identifier like: ' +
        'com.luckymarmot.PawExtensions.MySuperDV'
    throw new Error(msg)
}

const name = DynamicValue.identifier.split('.').slice(-1)

const production = process.env.NODE_ENV === 'production';

const config = {
  target: 'node-webkit',
  entry: [
    './src/DynamicValue.js'
  ],
  output:{
    path: path.join(__dirname, './dist/' + DynamicValue.identifier),
    pathInfo: true,
    publicPath: '/dist/',
    filename: name + '.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
