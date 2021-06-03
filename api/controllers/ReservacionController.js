/**
 * ReservacionController
 *
 * @description :: Server-side logic for managing Reservacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    CrearReservacion: function (req, res) {
        if (req.method == 'POST') {
            var params = req.allParams();
            //sails.log.info(params);

            Reservacion.create({
                fecha_ingreso: params.fecha_ingreso,
                fecha_salida: params.fecha_salida,
                num_tarjeta: params.num_tarjeta
            }).exec(function (err, result) {
                if (err) {
                    return res.serverError(err);
                }

                return res.ok(result);
            });
        }
    },

    BuscarReservacion: function (req, res) {
        if (req.method == 'POST') {
            var params = req.allParams();
            //sails.log.info(params);

            Reservacion.findOne({
                id_reservacion: params.id_reservacion
            }).exec(function (err, result) {
                if (err) {
                    return res.serverError(err);
                }

                return res.ok(result);
            });
        }
    }
}