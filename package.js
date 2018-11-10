Package.describe({
  name: 'thebarty:denormalized-views',
  version: '0.0.11',
  summary: 'Easily create "readonly" denormalized mongo-"views" (collections), p.e. for searchable tables',
  git: 'https://github.com/thebarty/meteor-denormalized-views',
  documentation: 'README.md',
});

Npm.depends({
  'underscore': '1.8.3',
  'underscore.string': '3.3.4',
})

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');  // todo: test if we can set versions down
  api.use([
    'check',
    'ecmascript',
    'aldeed:simple-schema@1.5.1',  // todo: test if we can set versions down
    'matb33:collection-hooks@0.8.4',  // needed due to https://github.com/matb33/meteor-collection-hooks/issues/207
  ])
  // TODO add code ONLY to server without crashing production,
  //  BUT be CAREFUL: a simple `], 'server')` will crash the client when running
  //   meteor in production (or via `meteor --production`)
  //   see https://github.com/thebarty/meteor-denormalized-views/issues/3
  api.mainModule('denormalized-views.js');
});

Package.onTest(function(api) {
  api.use([
    'check',
    'ecmascript',
    'tinytest',
    'test-helpers',
    'ejson',
    'ordered-dict',
    'random',
    'deps',
    'minimongo',
    'aldeed:simple-schema',
    'aldeed:collection2@2.9.1',
    'matb33:collection-hooks',
    'thebarty:denormalized-views',
    'cultofcoders:mocha',
  ])
  // TODO add code ONLY to server without crashing production,
  //  BUT be CAREFUL: a simple `], 'server')` will crash the client when running
  //   meteor in production (or via `meteor --production`)
  //   see https://github.com/thebarty/meteor-denormalized-views/issues/3
  api.mainModule('denormalized-views.tests.js');
});
