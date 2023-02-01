const merge = require('webpack-merge')
const base = require('./webpack.common.config')

module.exports = merge(base, {
  output: {
    filename: 'index.js'
  }
})