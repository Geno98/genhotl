/**
 * ClienteController
 *
 * @description :: Server-side logic for managing Clientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   
    buscar: function (req, res) {
        //console.log(req.param('roomType'));
        if (req.method == 'POST') {
            params = req.allParams();
            sails.log.info(params);

            sql = "select * from cliente where cedula = '" + params.cedula+"'";

            Cliente.query(sql, [], function (err, clientes) {
                if (err) {
                    return res.serverError(err);
                }

                /*return res.view('rooms', {
                    habitaciones: habitaciones
                });*/
                                
                sails.log.info(clientes);

                return res.view('consulta', {
                    pclassR: 'active',
                    pclassC: 'disabled',
                    tclassR: 'in active',
                    tclassC: ' ',
                    clientes: clientes                   
                });
            });
        }
    }
};