/**
 * HabitacionController
 *
 * @description :: Server-side logic for managing Habitacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    Buscar: function (req, res) {
        //console.log(req.param('roomType'));
        if (req.method == 'POST') {
            params = req.allParams();
            sails.log.info(params);

            sql = "select * from verHabitacionesDisponibles('" + params.fechaIngreso + "','" + params.fechaSalida + "','" + params.roomType + "','" + params.maxPrice + "')";

            Habitacion.query(sql, [], function (err, habitaciones) {
                if (err) {
                    return res.serverError(err);
                }

                /*return res.view('rooms', {
                    habitaciones: habitaciones
                });*/
                sails.log('Bien');

                return res.ok(habitaciones.rows);
            });
        }
    }
};