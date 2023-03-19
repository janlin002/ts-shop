const path = require('path')

module.exports = {
    mode: "development",
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/' // 讓webpack了解該去哪看更新
    },
    devtool: 'inline-source-map',
    devServer: {
        static: [
          {
            directory: path.join(__dirname),
          },
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/ // 排除編譯
            },
            {
                test: /\.(jsx|tsx)x?$/,    // add |ts
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    }
}