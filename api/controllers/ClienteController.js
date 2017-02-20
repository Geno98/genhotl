/**
 * ClienteController
 *
 * @description :: Server-side logic for managing Clientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    buscarCedula: function (req, res) {
        //        if (req.method == 'POST') {
        //            //console.log(req.param('id_hab'));
        //            Cliente.find({
        //                cedula: req.param('cedula')
        //            }).exec(function (err, habitaciones) {
        //                if (err) {
        //                    return res.serverError(err);
        //                }
        //
        ////                return res.view('consulta', {
        ////                    pclassR: 'active',
        ////                    pclassC: 'disabled',
        ////                    tclassR: 'in active',
        ////                    tclassC: ' ',
        //////                    habitacionesF: habitaciones,
        //////                    nombres: req.param('nombres'),
        //////                    apellidos: req.param('apellidos'),
        //////                    cedula: req.param('cedula'),
        //////                    email: req.param('email'),
        //////                    direccion: req.param('direccion'),
        //////                    telefono: req.param('telefono'),
        //////                    fecha_reserva: req.param('fecha_reserva'),
        //////                    dias: req.param('dias'),
        //////                    num_tarjeta: req.param('num_tarjeta'),
        //////                    personas: req.param('personas')
        ////                });
        //            });
        //        }
        return res.view('consulta', {
            pclassR: 'active',
            pclassC: 'disabled',
            tclassR: 'in active',
            tclassC: ' ',
            //                    habitacionesF: habitaciones,
            //                    nombres: req.param('nombres'),
            //                    apellidos: req.param('apellidos'),
            //                    cedula: req.param('cedula'),
            //                    email: req.param('email'),
            //                    direccion: req.param('direccion'),
            //                    telefono: req.param('telefono'),
            //                    fecha_reserva: req.param('fecha_reserva'),
            //                    dias: req.param('dias'),
            //                    num_tarjeta: req.param('num_tarjeta'),
            //                    personas: req.param('personas')
        });
    },


    buscar: function (req, res) {
        //console.log(req.param('roomType'));
        if (req.method == 'POST') {
            params = req.allParams();
            sails.log.info(params);

            sql = "select * from cliente where cedula = '" + params.cedula+"'";

            Cliente.query(sql, [], function (err, cliente) {
                if (err) {
                    return res.serverError(err);
                }

                /*return res.view('rooms', {
                    habitaciones: habitaciones
                });*/
                
                sails.log.info(cliente);

                return res.view('consulta', {
                    pclassR: 'active',
                    pclassC: 'disabled',
                    tclassR: 'in active',
                    tclassC: ' ',
                    cliente: cliente,
                    nombre: cliente.nombre                    
                });
            });
        }
    }
};