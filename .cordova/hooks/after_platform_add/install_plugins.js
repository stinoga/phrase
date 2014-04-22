#!/usr/bin/env node

//this hook installs all your plugins

// add your plugins to this list--either the identifier, the filesystem location or the URL
var pluginlist = [
  'https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git',
  'https://github.com/Rickgbw/cordova-plugin-media.git',
  'https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git',
  'https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git',
  'https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git'
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
  exec('phonegap local plugin add ' + plug, puts);
});
