const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'pages'),
    filename: 'bundle.js'
  }
};
