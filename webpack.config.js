module.exports = {
  context: __dirname + '/app/assets',

  entry: {
    javascript: './index.js',
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  devServer: {
    proxy: {
      '/api': {
        target: {
          host: "localhost",
          protocol: 'http:',
          port: 3001
        },
        secure: false
      }
    },
    contentBase: 'dist',
    port: 3000
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@': __dirname + './app/assets',
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
};
