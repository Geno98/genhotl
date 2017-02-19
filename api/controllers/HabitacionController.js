/**
 * HabitacionController
 *
 * @description :: Server-side logic for managing Habitacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    buscar: function (req, res) {
        //console.log(req.param('roomType'));
        if (req.method == 'POST') {
            params = req.allParams();
            sails.log.info(params);

            sql = "select verHabitacionesDisponibles('" + params.fechaIngreso + "','" + params.fechaSalida + "','" + params.minPrice + "','" + params.maxPrice + "')";

            Habitacion.query(sql, [], function (err, habitaciones) {
                if (err) {
                    return res.serverError(err);
                }

                /*return res.view('rooms', {
                    habitaciones: habitaciones
                });*/

                return res.view('reservation', {
                    pclassS: 'active',
                    pclassC: 'disabled',
                    tclassS: 'in active',
                    tclassC: ' ',
                    habitaciones: habitaciones
                });
            });
        }
    }
};