/**
 * Reservacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,
    connection: 'herokuPostgreSQL',
    tableName: 'reservacion',
    attributes: {
        id_reservacion: {
            type: 'integer',
            columnName: 'id_reservacion',
            primaryKey: true,
            autoIncrement: true
        },
        fecha_ingreso: 'date',
        fecha_salida: 'date',
        num_tarjeta: 'string'
    }
};