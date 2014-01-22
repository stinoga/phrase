#!/usr/bin/env node

//this hook installs all your plugins

// add your plugins to this list--either the identifier, the filesystem location or the URL
var pluginlist = [
  'org.apache.cordova.console',
  'org.apache.cordova.media',
  'org.apache.cordova.file'
];

// no need to configure below

var fs = require('fs'),
    path = require('path'),
    sys = require('sys'),
    exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  sys.puts(stdout)
}

pluginlist.forEach(function(plug) {
  exec('cordova plugin add ' + plug, puts);
});
