/* globals Package */
/* eslint-disable func-names,prefer-arrow-callback */
Package.describe({
  name: 'trajano:angular-blaze-template',
  version: '0.3.3',
  summary: 'Include Blaze templates in your angular-meteor application. (Supports Meteor 1.3+)',
  git: 'https://github.com/trajano/angular-blaze-template',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3')
  api.use('blaze')
  api.use('templating')
  api.use('pbastowski:angular-babel@1.3.6')
  api.mainModule('angular-blaze-template.js', 'client')
})

Package.onTest(function (api) {
  api.use('tinytest')
  api.use('trajano:angular-blaze-template')
  api.addFiles('angular-blaze-template-tests.js')
})
