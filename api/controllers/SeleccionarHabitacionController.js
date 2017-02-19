/**
 * SeleccionarHabitacionController
 *
 * @description :: Server-side logic for managing Seleccionarhabitacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    register: function (req, res) {
        if (req.method == 'POST') {
            //console.log(req.param('id_hab'));
            return res.view('reservation', {
                pclassD: 'active',
                pclassS: 'disabled',
                pclassC: 'disabled',
                tclassD: 'in active',
                tclassS: ' ',
                tclassC: ' ',
                habT: req.param('id_hab')
            });
        }
    }
};