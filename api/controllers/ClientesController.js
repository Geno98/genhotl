/**
 * ClienteController
 *
 * @description :: Server-side logic for managing Clientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	CrearCliente: function (req, res) {
        if (req.method == 'POST') {
            var params = req.allParams();
            //sails.log.info(params);

            Clientes.create({
                nombres: params.nombres,
                apellidos: params.apellidos,
                cedula: params.cedula,
                email: params.email,
                direccion: params.direccion,
                telefono: params.telefono
            }).exec(function (err, result) {
                if (err) {
                    return res.serverError(err);
                }
                
                return res.ok(result);
            });
        }
    }
};

