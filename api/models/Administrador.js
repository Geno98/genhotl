/**
 * Administrador.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,
    connection: 'herokuPostgreSQL',
    tableName: 'administrador',
    attributes: {
        id_admin: 'integer',
        usuario: 'string',
        pass: 'string',
        nombre_admin: 'string',
        apellido_admin: 'string'
    }
};

