/**
 * SeleccionarHabitacionController
 *
 * @description :: Server-side logic for managing Seleccionarhabitacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    register: function (req, res) {
        if (req.method == 'POST') {
            console.log(req.param('id_hab'));
        }
    }
};

