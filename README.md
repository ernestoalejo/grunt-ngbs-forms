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


#### noFieldset
Type: `Boolean`
Default: `false`

If truthy the form will not be wrapped with a fieldset tag. It can help with floating
issues of other items in the page that have to "enter" the form space.

```js
return {
  submit: 'myfunc',
  noFieldset: true,
};
```


#### fields
Type: `Object`

An object with a *id: info* pair with the id of the form field (unique within
the form) and an object containing the info of that field (see field info object).


### Field info object
Fields objects, associated to an id (see form info objects), can have several properties
customizing aspects of the field. There are several which are common to all of them, one
of them always required (`kind`). The rest are specific to which kind you choose.

#### kind
Type: `String`
One of: `input`, `submit`, `select`

```js
return {
  fields: {
    myinput: {
      kind: 'input',
    },
  },
};
```

The kind of this form field.

#### id
Type: `String`
Default: ``

The id for this field. If present it will replace the generated one. It's useful
mainly to forms inside ng-repeats, where the label should point to a field with
a index like "myid{{ $index }}".

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      id: 'myid{{ $index }}',
    },
  },
};
```

#### name
Type: `String`
Default: ``

The name for this field. If not present it will default to the key of the object.
You should prefer **always** to change directly the key of the object because it's
shorter and have a concise meaning.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      name: 'myinput-withdash',
    },

    // Preferred
    'myinput-withdash': {
      kind: 'input',
    }
  },
};
```

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

#### attrs
Type: `Object`
Default: `{}`

Additional arguments for the input tag. It's an object of *name: value* items.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      attrs: {
        myname: 'myvalue',
        myname2: 'myvalue2',
      },
    },
  },
};
```

#### containerAttrs
Type: `Object`
Default: `{}`

Additional arguments for the field container. It's an object of *name: value* items.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      containerAttrs: {
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

#### prefix
Type: `String`
Default: ``

If present the input will be rendered as an input group with that prefix. It can
be HTML.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      prefix: 'myprefix',
    },
  },
};
```

#### suffix
Type: `String`
Default: ``

If present the input will be rendered as an input group with that suffix. It can
be HTML.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      suffix: '{{ interpolatedSuffix }}',
    },
  },
};
```

### Textarea field
Generates a textarea tag in the form.

#### label
Type: `String`
Default: ``

Label for this textarea. If empty it will not be created.

```js
return {
  fields: {
    mytextarea: {
      kind: 'textarea',
      label: 'My Own Label',
    },
  },
};
```

#### placeholder
Type: `String`
Default: ``

Placeholder for this textarea. Empty or not it will be generated in the output, so
it's convenient to give always a value to this property for the generated code and
for the user.

```js
return {
  fields: {
    mytextarea: {
      kind: 'textarea',
      placeholder: 'My Placeholder',
    },
  },
};
```

#### attrs
Type: `Object`
Default: `{}`

Additional arguments for the textarea tag. It's an object of *name: value* items.

```js
return {
  fields: {
    mytextarea: {
      kind: 'textarea',
      attrs: {
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
    mytextarea: {
      kind: 'textarea',
      validations: [ ... ],
    },
  },
};
```

#### rows
Type: `Integer`
Default: `0`

If present and not zero it will adjust the number of textarea visible rows.

```js
return {
  fields: {
    mytextarea: {
      kind: 'textarea',
      rows: 3,
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

#### attrs
Type: `Object`
Default: `{}`

Additional arguments for the button tag. It's an object of *name: value* items.

```js
return {
  fields: {
    mysubmit: {
      kind: 'submit',
      attrs: {
        myname: 'myvalue',
        myname2: 'myvalue2',
      },
    },
  },
};
```

#### containerAttrs
Type: `Object`
Default: `{}`

Additional arguments for the field container. It's an object of *name: value* items.

```js
return {
  fields: {
    mysubmit: {
      kind: 'submit',
      containerAttrs: {
        myname: 'myvalue',
        myname2: 'myvalue2',
      },
    },
  },
};
```

#### additionalContent
Type: `String`
Default: ``

Additional content appended next to the submit button. It can be used to generate
a cancel button, for example.

```js
return {
  fields: {
    mysubmit: {
      kind: 'submit',
      additionalContent: 'Next to the button',
    },
  },
};
```


### Select field
Generates a select tag in the form.

#### label
Type: `String`
Default: ``

Label for this select. If empty it will not be created.

```js
return {
  fields: {
    myselect: {
      kind: 'select',
      label: 'My Own Label',
    },
  },
};
```

#### attrs
Type: `Object`
Default: `{}`

Additional arguments for the select tag. It's an object of *name: value* items.

```js
return {
  fields: {
    myselect: {
      kind: 'select',
      attrs: {
        myname: 'myvalue',
        myname2: 'myvalue2',
        'ng-options': 'item in list',
      },
    },
  },
};
```

#### options
Type: `Object`
Default: `{}`

Options for the select. It should be pairs of *value: label* items.

```js
return {
  fields: {
    myselect: {
      kind: 'select',
      options: {
        myvalue1: 'My Label 1',
        'my-value-2': 'My Label 2',
      },
    },
  },
};
```

#### ngRepeatOptions
Type: `Object`
Default: `undefined`
Object keys: `repeat`, `value` and `label`

Generate options using ngRepeat directly in the option tag. If not needed
(in AngularUI Select2 for example) ngOptions should be used directly
(see attrs example).

If it's undefined, it will not be generated.

```js
return {
  fields: {
    myselect: {
      kind: 'select',
      ngRepeatOptions: {
        repeat: 'item in list',
        value: '{{ item.value }}',
        label: '{{ item.label }}',
      },
    },
  },
};
```

### Static field
Generates a static text field in the form.

#### label
Type: `String`
Default: ``

Label for this field. If empty it will not be created.

```js
return {
  fields: {
    myselect: {
      kind: 'static',
      label: 'My Own Label',
    },
  },
};
```


#### content
Type: `String`
Default: ``

Content of the field.

```js
return {
  fields: {
    static: {
      kind: 'static',
      content: 'content of the field',
    },
  },
};
```


### Static field (no wrapping)
Generates a static text in the form, directly, without label or any other
kind of wrapping.

It can be used in pairs to generate start and end HTML needed to wrap parts
of the form in a Bootstrap panel, for example.


#### content
Type: `String`
Default: ``

Content of the field.

```js
return {
  fields: {
    static: {
      kind: 'staticNoWrapper',
      content: '<div class="panel">',
    },

    otherfield: {
      kind: 'input',
    },

    staticend: {
      kind: 'staticNoWrapper',
      content: '</div>',
    },
  },
};
```


### Checkbox field
Generates a checkbox input field in the form.

#### label
Type: `String`
Default: ``

Label for the checkbox input.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      label: 'Remember me',
    },
  },
};
```

#### attrs
Type: `Object`
Default: `{}`

Additional arguments for the input tag. It's an object of *name: value* items.

```js
return {
  fields: {
    mycheckbox: {
      kind: 'checkbox',
      attrs: {
        myname: 'myvalue',
        myname2: 'myvalue2',
      },
    },
  },
};
```

#### containerAttrs
Type: `Object`
Default: `{}`

Additional arguments for the field container. It's an object of *name: value* items.

```js
return {
  fields: {
    mycheckbox: {
      kind: 'checkbox',
      containerAttrs: {
        myname: 'myvalue',
        myname2: 'myvalue2',
      },
    },
  },
};
```


### Radio field
Generates a bunch of radio tags in the form.

#### attrs
Type: `Object`
Default: `{}`

Additional arguments for the input tag. It's an object of *name: value* items.

```js
return {
  fields: {
    myradio: {
      kind: 'radio',
      attrs: {
        myname: 'myvalue',
        myname2: 'myvalue2',
      },
    },
  },
};
```

#### options
Type: `Object`
Default: `{}`

Options for the radios. It should be pairs of *value: label* items.

```js
return {
  fields: {
    myradio: {
      kind: 'radio',
      options: {
        myvalue1: 'My Label 1',
        'my-value-2': 'My Label 2',
      },
    },
  },
};
```

#### containerAttrs
Type: `Object`
Default: `{}`

Additional arguments for the field container. It's an object of *name: value* items.

```js
return {
  fields: {
    myradio: {
      kind: 'radio',
      containerAttrs: {
        myname: 'myvalue',
        myname2: 'myvalue2',
      },
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

There's an **extended format** for cases that requires a colon inside an arg, though
the simple format should be always preferred. You can pass directily the array
containing *[name, arg1, arg2, message]* to the validatior.

Example using an input tag with a label and three validations:

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      label: 'My data'
      validations: [
        ['required', 'My data it is required'],
        ['minlength:3', 'My data has to be larger than 3 chars'],
        ['minlength', 3, 'Extended format for the validator']
      ],
    },
  },
};
```

#### required
Fields: `input`, `textarea`

Checks that at least a value it's specified.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      validations: [
        ['required', 'required message'],
      ],
    },
  },
};
```

#### minlength
Fields: `input`, `textarea`
Arguments:
  1) The length to check

Checks the content to see if it has at least X number of chars.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      validations: [
        ['minlength:3', 'minlength message'],
      ],
    },
  },
};
```

#### maxlength
Fields: `input`, `textarea`
Arguments:
  1) The length to check

Checks the content to see if it has X number of chars maximum.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      validations: [
        ['maxlength:3', 'maxlength message'],
      ],
    },
  },
};
```

#### pattern
Fields: `input`, `textarea`
Arguments:
  1) The regexp to match against

Checks the content to see if it matchs a regexp.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      validations: [
        ['pattern', /^[a-zA-Z]$/, 'pattern message'],
      ],
    },
  },
};
```

#### custom
Fields: `input`, `select`, `textarea`
Arguments:
  1) The expression to check for a truthy value.

Checks a custom expression to show an error. If the expression evaluates to true
and the field is not marked as dirty, it will show the error message.

It could be a variable from scope that you change when submitting the form, for example.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      validations: [
        ['custom:repeatedPage', 'custom message'],
      ],
    },
  },
};
```

#### integer
Fields: `input`

Adds a message if the input value is not a valid integer. The input type
should be set to number for this to work (see example).

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      type: 'number'
      validations: [
        ['integer', 'integer required'],
      ],
    },
  },
};
```

#### minvalue
Fields: `input`
Arguments:
  1) The value to check (inclusive)

Checks the integer to see if it's equal or greater than the value. It requires
an input with the number type (see example).

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      type: 'number',
      validations: [
        ['minvalue:3', 'the integer should be 3 or more'],
      ],
    },
  },
};
```

#### date
Fields: `input`

Adds a message if the input value is not a valid date. The input type
should be set to text and have datepicker directives (that transform strings
to dates) for this to work.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      validations: [
        ['date', 'date required'],
      ],
    },
  },
};
```

#### mindate
Fields: `input`
Arguments:
  1) The value to check

Adds min & min-date attributes to the input tag. It requires some kind of directive
to validate them.
The value can be a scoped variable.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      validations: [
        ['mindate:minDate', 'min date required'],
      ],
    },
  },
};
```

#### maxDate
Fields: `input`
Arguments:
  1) The value to check

Adds max & max-date attributes to the input tag. It requires some kind of directive
to validate them.
The value can be a scoped variable.

```js
return {
  fields: {
    myinput: {
      kind: 'input',
      validations: [
        ['maxDate:maxDate', 'max date required'],
      ],
    },
  },
};
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
* 2013-12-20   v0.16.0  Add checkbox & radio kind types.
* 2013-12-20   v0.15.0  Add maxlength validation.
* 2013-12-20   v0.14.0  Add additional content to submit fields. Add static field without any kind of wrapping.
* 2013-12-16   v0.13.0  Add email validation.
* 2013-12-13   v0.12.2  Switch off autofill in forms.
* 2013-12-04   v0.12.1  Fix container attributes.
* 2013-12-04   v0.12.0  Add container attributes to inputs.
* 2013-12-04   v0.11.0  Add date validations (and min & max for date values).
* 2013-12-03   v0.10.1  Fix problems parsing a zero value in minvalue validation.
* 2013-12-03   v0.10.0  Add integer & minvalue validations.
* 2013-12-01   v0.9.0   Add option to avoid wrapping the form in a fieldset tag.
* 2013-12-01   v0.8.0   You can now specify the name & id of individual fields.
* 2013-12-01   v0.7.3   The form definition can specify the protected name.
* 2013-12-01   v0.7.2   Protect form name in the ng-submit attribute.
* 2013-11-30   v0.7.1   Fix field referencing to allow any char (e.g. points) in the ids of the field.
* 2013-11-30   v0.7.0   Add static fields.
* 2013-11-29   v0.6.1   Add container attributes to submit fields.
* 2013-11-29   v0.6.0   Submit buttons can have attributes now.
* 2013-11-28   v0.5.5   Custom validators fix.
* 2013-11-28   v0.5.4   Typo.
* 2013-11-28   v0.5.3   Another validation fix.
* 2013-11-28   v0.5.2   Fix typo in last commit.
* 2013-11-28   v0.5.1   Show errors when the field is not dirty only.
* 2013-11-28   v0.5.0   Textarea field.
* 2013-11-28   v0.4.1   Add prefix & suffix to inputs. Extended format for the validators. Add regexp & custom validation.
* 2013-11-27   v0.3.3   Fix validations generation. Fix angular error detection. Disable submit button if the form has errors. Less verbose output.
* 2013-11-27   v0.3.2   Space in the submit field. Fix validator generation.
* 2013-11-27   v0.3.1   Change args to the semantically correct attrs.
* 2013-11-27   v0.3.0   Add repeated options to selects.
* 2013-11-25   v0.2.1   Fix templates path problem.
* 2013-11-18   v0.2.0   Add select builder.
* 2013-11-18   v0.1.3   Some lint fixes and README updates.
* 2013-11-18   v0.1.0   Release initial uncomplete ngbs_forms task.
