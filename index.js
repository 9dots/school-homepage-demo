var metalsmith        = require('metalsmith');
var watch             = require('metalsmith-watch');
var metalsmithExpress = require('metalsmith-express');
var reactTemplate     = require('metalsmith-react-templates')
var json_to_files     = require('metalsmith-json-to-files')
var collections       = require('metalsmith-collections')
var layouts           = require('metalsmith-layouts')
var assets            = require('metalsmith-assets')
var permalinks        = require('metalsmith-permalinks')
var browserify        = require('browserify')
var babelify          = require('babelify')
var fs                = require('fs')

metalsmith(__dirname)
  .source('./src')
  .clean(true)
  .destination('./public')
  .use(metalsmithExpress())
  .use(collections({
    alexandria: 'alexandria/*.html'
  }))
  .use(permalinks({
    relative: false
  }))
  .use(reactTemplate({
      babel: true,
      directory: './templates',
      baseFile: 'base.html',
      isStatic: false,
      defaultTemplate: 'Default.jsx'
  }))
  .use(assets({
    source: './assets', // relative to the working directory
    destination: './assets' // relative to the build directory,
  }))
  .use (
    watch({
      paths: {
        '${source}/**/*': true,
        'templates/**/*': true,
        'assets/**/*.css': true
      },
      livereload: true
    })
  )
  .build(function(err) {
    if (err) {
      console.log('build err')
      throw err
    }
  });