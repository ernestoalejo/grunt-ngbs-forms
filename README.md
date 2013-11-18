# grunt-ngbs-forms

> Generate forms using Angular for validations and Bootstrap for styles from simple JS descriptions


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ngbs-forms --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ngbs-forms');
```


## The "ngbs_forms" task

### Overview
In your project's Gruntfile, add a section named `ngbs_forms` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ngbs_forms: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.templateStartDelimiter and options.templateEndDelimiter
Type: `String`
Default value: `<%` and `%>`

You can change the template delimiters used to replace the form content in the HTML.

#### options.formsCwd
Type: `String`
Default value: `.`

Folder where we should start searching the relative path to the form data.

### Usage Examples

#### Default Options
This example uses the default options and generates the form(s) of *testing.html*
saving the final result to *default_options.html*.

```js
grunt.initConfig({
  ngbs_forms: {
    options: {},
    files: {
      'dest/default_options.html': ['src/testing.html'],
    },
  },
})
```

The *testing.html* file should have something like this:

```html
...html before the form...
<%= buildForm('path/to/form.js') %>
...html after the form...
```

## Form data format
### File global format
Form files are written in Javascript and imported via *require()*. You have
to export a function that returns an object (the form info object).

```js
'use strict';

module.exports = function() {
  return {
    ....
  };
};
```

### Form info object
Containing info that affects the whole form. You can specify several keys for this
object.

#### name
Type: `String`
Default: `f`

The internal name of the form. Should be unique on the page. All fields within this
form will get a name prefixed with this string; so it should be concise.

```js
return {
  name: 'myname',
  fields: { ... },
};
```

#### object
Type: `String`
Default: `data`

Angular scoped object where the form data will be collected. See the section that
explains how to use the generated forms with angular for more info.

```js
return {
  object: 'myobj',
  fields: { ... },
};
```


#### trySubmit
Type: `String`
Default: ``

You can specify the name of a scoped (in the Angular sense of the word) function
that will be called when the user tries to submit the form (passing succesfully
the validations or not). It could be use to scroll the form to the first
error, for example. If the name it's empty, no function will be called.

```js
return {
  trySubmit: 'myfunc',
  fields: { ... },
}
```


#### submit
Type: `String`
Default: `submit`

The name of a scope (in the Angular sense of the word) function that will be called
when all the validations have been passed succesfully. It can access the form data
in the scoped object (`data` by default, see object explanation).

```js
return {
  submit: 'myfunc',
  fields: { ... },
};
```


#### fields
Type: `Object`

An object with a *id: info* pair with the id of the form field (unique within
the form) and an object containing the info of that field (see field info object).


### Field info object
Fields objects, associated to an id (see form info objects), can have several properties
customizing aspects of the field. There's one which is common to all of them, and always
required (`kind`). The rest are specific to which kind you choose.

#### kind
Type: `String`
One of: `input`, `submit`

The kind of this form field.


### Input field
Generates an input tag in the form.

#### type
Type: `String`
Default: `text`

Type attribute of the input tag.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      type: 'password',
    },
  },
};
```

#### label
Type: `String`
Default: ``

Label for this input. If empty it will not be created.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      label: 'My Own Label',
    },
  },
};
```

#### placeholder
Type: `String`
Default: ``

Placeholder for this input. Empty or not it will be generated in the output, so
it's convenient to give always a value to this property for the generated code and
for the user.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      placeholder: 'My Placeholder',
    },
  },
};
```

#### args
Type: `Object`
Default: `{}`

Additional arguments for the input tag. It's an object of *name: value* items.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      args: {
        myname: 'myvalue',
        myname2: 'myvalue2',
      },
    },
  },
};
```

#### validations
Type: `Array`
Default: `[]`

See the validations section for more info.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      validations: [ ... ],
    },
  },
};
```

### Submit field
Generates submit button in the form.

#### label
Type: `String`
Default: ``

Label for the submit button.

```js
return {
  fields: {
    mysubmit: {
      kind: 'submit',
      label: 'Send My Form',
    },
  },
};
```


### Validations
Validations are arrays of *[name, message]* pairs with the name of the validation
to apply and the message when an error occurs.

Some validations require arguments (as `minlength` for example). You can pass the arguments
using a colons: `minlength:3`, `othervalidation:arg1,arg2,arg3`.

Not all fields accept all validations, refer to the individual validations documentation
to see which fields can be applied to.

Example using an input tag with a label and two validations:

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      label: 'My data'
      validations: [
        ['required', 'My data it is required'],
        ['minlength:3', 'My data has to be larger than 3 chars'],
      ],
    },
  },
};
```

#### required
Fields: `input`.

Checks that at least a value it's specified.

#### minlength
Fields: `input`
Arguments:
  1) The length to check

Checks the content to see if it has at least X number of chars.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
* 2013-11-18   v0.1.3   Some lint fixes and README updates.
* 2013-11-18   v0.1.0   Release initial uncomplete ngbs_forms task.
