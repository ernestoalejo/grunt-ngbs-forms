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
