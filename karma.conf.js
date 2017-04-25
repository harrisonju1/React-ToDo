var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
    browsers:['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'], //** = match any subdirectories in tests * = any file with the extension
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client:{
      mocha:{
        timeout: '5000' //time out after 5000ms
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
