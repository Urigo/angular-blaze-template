var angularMeteorTemplate = angular.module('angular-blaze-template', []);

// blaze-template adds Blaze templates to Angular as directives
angularMeteorTemplate.directive('blazeTemplate', [
  '$compile',
  function ($compile) {
    return {
      restrict: 'AE',
      scope: false,
      link: function (scope, element, attributes) {
        // Check if templating and Blaze package exist, they won't exist in a
        // Meteor Client Side (https://github.com/idanwe/meteor-client-side) application
        if (Template && Package['blaze']){

          var name = attributes.blazeTemplate || attributes.name;
          if (name && Template[name]) {

            var template = Template[name],
                viewHandler;
            
            if (typeof attributes['replace'] !== 'undefined') {
              viewHandler = Blaze.
                renderWithData(template, scope, element.parent()[0], element[0]);
              element.remove();
            } else {
              viewHandler = Blaze.renderWithData(template, scope, element[0]);
              $compile(element.contents())(scope);
              element.find().unwrap();
            }

            scope.$on('$destroy', function() {
              Blaze.remove(viewHandler);
            });

          } else {
            console.error("meteorTemplate: There is no template with the name '" + name + "'");
          }
        }
      }
    };
  }
]);

var angularMeteorModule = angular.module('angular-meteor');
angularMeteorModule.requires.push('angular-blaze-template');
