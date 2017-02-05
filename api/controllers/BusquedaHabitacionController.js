/**
 * BusquedaHabitacionController
 *
 * @description :: Server-side logic for managing Busquedahabitacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  register: function (req, res) {
      //console.log(req.param('roomType'));
      
      Habitacion.find({
          precio: { '>=': req.param('minPrice')},
          precio: { '<=': req.param('maxPrice')},
          tipo: req.param('roomType')          
      }).exec(console.log);
  }
};

