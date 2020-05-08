module.exports = {
  entry: './js/app.js',
  // devtool: 'inline-source-map',
  // resolve: {
  //   extensions: [ '.tsx', '.ts', '.js' ]
  // },
  // module: {
  //   rules: [
  //     { 
  //       test: /\.tsx?$/, 
  //       use: "ts-loader", 
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  // output: {
  //   filename: 'bundle.js'
  // },
  devServer: {
    inline: false
  },
};
