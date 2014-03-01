# grunt-ngbs-forms

> Generate forms using Angular for validations and Bootstrap for styles from short and concise descriptions of the fields.

To read more about the format of the form files see the [ngbs-forms](https://github.com/ernestoalejo/ngbs-forms) project directly.

## Getting Started
This plugin requires Grunt `~0.4.2`

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
<%= buildForm('path/to/file.form') %>
...html after the form...
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
* 2014-02-28   v1.0.0   Use the independent ngbs-forms library with the new file format.
* 2014-01-06   v0.19.1  Fix match validation.
* 2014-01-06   v0.19.0  Add match validation.
* 2014-01-06   v0.18.3  Remove container attributes for static fields, they're not used.
* 2014-01-06   v0.18.2  Add container attributes to static fields.
* 2013-12-28   v0.18.1  Required validation can be applied to select fields.
* 2013-12-28   v0.18.0  Add url validation. Ackwnoledge label for radios.
* 2013-12-26   v0.17.0  Add maxvalue validation.
* 2013-12-20   v0.16.1  Re-order trySubmit func and setPristine call.
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
