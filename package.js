Package.describe({
  name: 'urigo:angular-blaze-template',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('angular@1.0.0-rc.3', 'client');
  api.addFiles('angular-blaze-template.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('urigo:angular-blaze-template');
  api.addFiles('angular-blaze-template-tests.js');
});
