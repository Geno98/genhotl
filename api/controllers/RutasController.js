/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {  
	Inicio: function (req, res) {
        return res.view('homepage');
    },
    
    FAQ: function (req, res) {
        return res.view('faq');
    },
    
    Reservaciones: function (req, res) {
        return res.view('reservation');
    },
    
    Detalles: function (req, res) {
        return res.view('details');
    }
};

