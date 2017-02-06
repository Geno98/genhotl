/**
 * DatosReserva.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombres: {
        type: 'string',
        required: true
    },
    apellidos: {
        type: 'string',
        required: true
    },
    cedula: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    direccion: {
        type: 'string',
        required: true
    },
    telefono: {
        type: 'string',
        required: true
    },
    personas: {
        type: 'integer',
        required: true
    },
    fecha_reserva: {
        type: 'date',
        required: true
    },
    dias: {
        type: 'integer',
        required: true
    },
    num_tarjeta: {
        type: 'string',
        required: true
    },
    id_habT: {
        type: 'integer',
        required: true
    }
  }
};

