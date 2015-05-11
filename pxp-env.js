#!/usr/bin/env node
var commander   = require('commander'),
    colors      = require('colors'),
    nconf       = require('nconf');

nconf.file(process.env.HOME + '/.pxp/config.json');
commander.parse(process.argv);

if (commander.args.length < 1) {
  console.log('pxp environment:', nconf.get('currentEnvironment'));
} else {
  var env = commander.args[0];
  if (nconf.get('environments').indexOf(env) === -1) {
    console.log('unknown pxp environment:'.red, env.red);
    console.log('pxp environment:', nconf.get('currentEnvironment'));
  } else {
    nconf.set('currentEnvironment', env);
    nconf.save();
    console.log('pxp environment:', nconf.get('currentEnvironment'));
  }
}
