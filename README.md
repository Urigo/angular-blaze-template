<a href="http://angular-meteor.com/"><img src="http://angular-meteor.com/images/logo-large.png" width="60" height="60" /></a>  [urigo:angular-blaze-template](http://angular-meteor.com/api/blaze-template)
======================================================

### &lt;blaze-template&gt;

Include Blaze templates in your [angular-meteor](http://angular-meteor.com/) application.

### Quick start

In the command line: `$ meteor add urigo:angular-blaze-template`

You can include Meteor's Blaze native templates with the [blaze-template](http://angular-meteor.com/api/blaze-template) directive.

```html
<template name="todoList">
    A couple of todos
</template>

<blaze-template name="todoList"></blaze-template>
```

### `replace` directive with template content
Sometimes, the page styling or logic could strictly depend on the DOM tree
depth level where the template elements are located. The directive element
could be replaced with the contents of the template using the attribute
`replace` as follows:

```html
<blaze-template name="todoList" replace></blaze-template>
```

**WARNING:** If `replace` is used, the original directive DOM element will
be completely removed and replaced with the content of the template. Therefore,
it will not be possible to use replace in combination with any other
directive, like `ng-if` or `ng-switch`.

### Next steps
Read more on blaze-template, using parameters and binding Blaze templates to Angular's scope in the [API docs](http://angular-meteor.com/api/blaze-template).
