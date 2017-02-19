/**
 * Reserva.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,
    connection: 'herokuPostgreSQL',
    tableName: 'reserva',
    attributes: {
        id_cliente: 'integer',
        id_habitacion: 'integer',
        fecha_ingreso: 'date',
        fecha_salida: 'date',
        num_tarjeta: 'string'
    }
};