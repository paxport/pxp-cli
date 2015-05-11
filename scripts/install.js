#!/usr/bin/env node
var fs = require('fs');

var homeDir = process.env.HOME,
    pxpDir  = homeDir + '/.pxp',
    fileName = 'config.json',
    configFile = pxpDir + '/' + fileName;

if (!fs.existsSync(configFile)) {
  if (!fs.existsSync(pxpDir)) {
    fs.mkdirSync(pxpDir);
  }
  fs.writeFileSync(configFile, JSON.stringify({}));
  var nconf = require('nconf');
  nconf.file(configFile);
  nconf.set("environments", ["test", "demo", "staging"]);
  nconf.set("currentEnvironment", "test");
  nconf.save();
}
