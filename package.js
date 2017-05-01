Package.describe({
  name: 'urigo:angular-blaze-template',
  version: '0.3.0',
  summary: 'Include Blaze templates in your angular-meteor application.',
  git: 'https://github.com/Urigo/angular-blaze-template',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('angular-with-blaze@1.2.0', 'client');
  api.use('blaze-html-templates', 'client');
  api.addFiles('angular-blaze-template.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('urigo:angular-blaze-template');
  api.addFiles('angular-blaze-template-tests.js');
});
