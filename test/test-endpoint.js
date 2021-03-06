'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var fs = require('fs-extra');

describe('plugin-wp:endpoint', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../endpoint'))
      .inTmpDir( function (dir) {
        fs.copySync(path.join(__dirname, './test-assets/subgenerator-test-plugin'), dir);
      })
      .withOptions({ force: true })
      .withArguments('new-endpoint')
      .withLocalConfig({
        "name": "Subgenerator Test Plugin",
        "homepage": "https://webdevstudios.com",
        "description": "A radical new plugin for WordPress!",
        "version": "0.1.0",
        "author": "WebDevStudios",
        "authoremail": "contact@webdevstudios.com",
        "authorurl": "https://webdevstudios.com",
        "license": "GPLv2",
        "slug": "subgenerator-test-plugin",
        "classname": "Subgenerator_Test_Plugin",
        "prefix": "subgenerator_test_plugin",
        "year": 2017
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'includes/class-new-endpoint.php',
      'tests/test-new-endpoint.php'
    ]);
  });
});
