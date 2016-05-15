/* globals Package */
/* eslint-disable func-names,prefer-arrow-callback */
Package.describe({
  name: 'urigo:angular-blaze-template',
  version: '0.3.0',
  summary: 'Include Blaze templates in your angular-meteor application.',
  git: 'https://github.com/Urigo/angular-blaze-template',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3')
  api.use('angular:angular@1.5.3', 'client', {
    weak: true
  })
  api.use('blaze')
  api.use('templating')
  api.use('pbastowski:angular-babel')
  api.mainModule('angular-blaze-template.js', 'client')
})

Package.onTest(function (api) {
  api.use('tinytest')
  api.use('urigo:angular-blaze-template')
  api.addFiles('angular-blaze-template-tests.js')
})
