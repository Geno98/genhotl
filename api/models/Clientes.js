/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,
    connection: 'herokuPostgreSQL',
    tableName: 'clientes',
    attributes: {
        id_cliente: {
            type: 'integer',
            columnName: 'id_cliente',
            primaryKey: true,
            autoIncrement: true
        },
        nombres: 'string',
        apellidos: 'string',
        cedula: 'string',
        email: 'string',
        direccion: 'string',
        telefono: 'string'
    }
};