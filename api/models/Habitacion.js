/**
 * Habitacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'herokuPostgreSQL',
  tableName: 'habitacion',
  attributes: {
    id_habitacion: {
      type: 'integer',
      columnName: 'id_habitacion',
      primaryKey: true,
      autoIncrement: true
    },
    precio: 'float',
    tipo: 'string',
    piso: 'integer',
    desayuno: 'integer',
    wifi: 'integer',
    buena_vista: 'integer'
  }
};

