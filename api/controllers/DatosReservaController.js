/**
 * DatosReservaController
 *
 * @description :: Server-side logic for managing Datosreservas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    register: function (req, res) {
        if (req.method == 'POST') {
            //console.log(req.param('id_hab'));
            Habitacion.find({
                id: req.param('id_habT')
            }).exec(function (err, habitaciones) {
                if (err) {
                    return res.serverError(err);
                }
                
                return res.view('reservation', {
                    pclassR: 'active',
                    pclassD: 'disabled',
                    pclassS: 'disabled',
                    pclassC: 'disabled',
                    tclassR: 'in active',
                    tclassD: ' ',
                    tclassS: ' ',
                    tclassC: ' ',
                    habitacionesF: habitaciones,
                    nombres: req.param('nombres'),
                    apellidos: req.param('apellidos'),
                    cedula: req.param('cedula'),
                    email: req.param('email'),
                    direccion: req.param('direccion'),
                    telefono: req.param('telefono'),
                    fecha_reserva: req.param('fecha_reserva'),
                    dias: req.param('dias'),
                    num_tarjeta: req.param('num_tarjeta'),
                    personas: req.param('personas')
                });
            });
        }
    }
};