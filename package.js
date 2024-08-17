Package.describe({
  name: 'imajus:string-helpers',
  version: '0.1.0',
  summary: 'Blaze helpers for string manipulation',
  git: 'https://github.com/imajus/meteor-string-helpers.git',
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom(['2.0', '3.0']);
  api.use('ecmascript');
  api.use(
    [
      'underscore',
      'templating@1.3.4||1.4.4',
      'underscorestring:underscore.string@3.3.4',
      'imajus:helpers-core@0.1.0'
    ],
    'client'
  );
  api.mainModule('string-helpers.js', 'client');
});

Package.onTest(function (api) {
  api.use(['ecmascript', 'tinytest']);
  api.use('imajus:string-helpers', 'client');
  api.mainModule('string-helpers-tests.js', 'client');
});
