#!/usr/bin/env node
var commander   = require('commander');

commander
  .command('env [name]', 'switch environments')
  // .command('carrier [name]', 'switch carrier contexts')
  .parse(process.argv);
