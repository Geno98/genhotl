/**
 * BusquedaHabitacionController
 *
 * @description :: Server-side logic for managing Busquedahabitacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    register: function (req, res) {
        //console.log(req.param('roomType'));
        if (req.method == 'GET') {
            Habitacion.find({
                precio: {
                    '>=': req.param('minPrice')
                },
                precio: {
                    '<=': req.param('maxPrice')
                },
                tipo: req.param('roomType')
            }).exec(function (err, habitaciones) {
                if (err) {
                    return res.serverError(err);
                }
                return res.view('rooms', {
                    habitaciones: habitaciones
                });
            });
        }
    }
};