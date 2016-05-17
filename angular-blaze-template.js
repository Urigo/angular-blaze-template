/**
 * This directive allows the use of Blaze templates in Angular templates.
 */
import { Blaze } from 'meteor/blaze'
import { Template } from 'meteor/templating'
import angular from 'angular'

const moduleName = 'angular-blaze-template'

angular.module(moduleName, [])
  .directive('blazeTemplate', ($compile, $log) => {
    'ngInject'
    return {
      restrict: 'AE',
      scope: false,
      /**
       * @param {$rootScope.Scope} scope
       * @param {jQuery} element element where the Blaze template will be attached to.
       * @param {{name: string, blazeTemplate: string, replace:string}} attrs
       */
      link: (scope, element, attrs) => {
        const name = attrs.blazeTemplate || attrs.name
        if (name && Template[name]) {
          const template = Template[name]
          let viewHandler

          if (angular.isDefined(attrs.replace)) {
            viewHandler = Blaze.renderWithData(template, scope, element.parent()[0], element[0])
            element.remove()
          } else {
            viewHandler = Blaze.renderWithData(template, scope, element[0])
            $compile(element.contents())(scope)
            element.find().unwrap()
          }

          scope.$on('$destroy', () => {
            Blaze.remove(viewHandler)
          })
        } else {
          $log.error(`blazeTemplate: There is no template with the name '${name}'`)
        }
      }
    }
  })

export default moduleName
