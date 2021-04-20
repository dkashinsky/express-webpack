const express = require('express');
const app = express();

if (process.env.ENV == 'dev') {
  const webpack = require('webpack');
  const middleware = require('webpack-dev-middleware');
  const config = require('./webpack.config')();

  const compiler = webpack(Object.assign(config, {
    // webpack options
    mode: 'production'
  }));

  app.use(
    middleware(compiler, {
      // webpack-dev-middleware options
      index: false
    })
  );
}

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
