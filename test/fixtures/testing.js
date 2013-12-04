'use strict';


module.exports = function() {
  return {
    noFieldset: true,
    fields: {
      end: {
        kind: 'input',
        label: 'Fecha de finalización',
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
    },
  };
};
