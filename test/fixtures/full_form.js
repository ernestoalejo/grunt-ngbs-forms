'use strict';


module.exports = function() {
  return {
    fields: {
      myinput: {
        kind: 'input',
      },

      myinputv: {
        kind: 'input',
        label: 'Email',
        type: 'email',
        placeholder: 'test@example',
        attrs: {
          'myarg1': 'myvalue1',
          'myarg2': 'myvalue2',
        },
        validations: [
          ['required', 'El email es obligatorio'],
          ['minlength:3', 'El email debe tener al menos 3 caracteres'],
          ['email', 'required email'],
        ],
      },

      myinputaffix: {
        kind: 'input',
        prefix: 'myprefix',
        suffix: 'mysuffix',
        validations: [
          ['minlength', 3, 'El email debe tener al menos 3 caracteres'],
          ['pattern', /^[a-z]$/, 'My pattern'],
        ],
      },

      myinputmyid: {
        kind: 'input',
        label: 'myid',
        id: 'myidtest',
        validations: [
          ['required', 'required validation with the name'],
        ],
      },

      myint: {
        kind: 'input',
        type: 'number',
        validations: [
          ['integer', 'integer required'],
          ['minvalue:10', 'at least 10 required'],
        ],
      },

      myintzero: {
        kind: 'input',
        type: 'number',
        validations: [
          ['integer', 'integer required'],
          ['minvalue:0', 'at least 0 required'],
        ],
      },

      myselect: {
        kind: 'select',
      },

      myselectoptions: {
        kind: 'select',
        options: {
          'myvalue1': 'mylabel1',
          'myvalue2': 'mylabel2',
        },
        validations: [
          ['custom:myexpr', 'My message'],
        ],
      },

      myselectng: {
        kind: 'select',
        label: 'Select label',
        attrs: {
          'ng-options': 'items in list',
        },
      },

      myselectrepeat: {
        kind: 'select',
        ngRepeatOptions: {
          repeat: 'item in list',
          value: '{{ item.label }}',
          label: '{{ item.label }}',
        },
        options: {
          'foo': 'bar',
        }
      },

      mytextarea: {
        kind: 'textarea',
        label: 'My textarea',
        rows: 7,
      },

      mystatic: {
        kind: 'static',
        label: 'My Static',
        content: '<p>static content</p>',
      },

      datepicker: {
        kind: 'input',
        label: 'Datepicker field',
        placeholder: 'DD/MM/AAAA',
        attrs: {
          'datepicker-popup': 'dd/MM/yyyy',
          'datepicker-manual': '',
          'datepicker-options': 'datepickerOptions',
        },
        validations: [
          ['required', 'La fecha de finalización es obligatoria en formato DD/MM/AAAA'],
          ['date', 'La fecha debe tener un formato válido DD/MM/AAAA'],
          ['mindate:minDate', 'La fecha debe corresponder a hoy, o un día posterior'],
        ],
      },

      mystaticnowrapper: {
        kind: 'staticNoWrapper',
        label: 'My Static No Wrapper',
        content: '<p>static no wrapper content</p>',
      },

      mysubmit: {
        kind: 'submit',
        label: 'Send button',
      },

      mysubmitattrs: {
        kind: 'submit',
        label: 'Send button',
        containerAttrs: {
          foo: 'bar',
        },
        attrs: {
          baz: 'qux',
        }
      },
    },
  };
};
