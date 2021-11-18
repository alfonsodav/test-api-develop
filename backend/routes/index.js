var express = require('express');
var router = express.Router();
const personaController = require('../controller/person');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/usuario/create', personaController.create);
router.get('/api/usuario/list', personaController.list);
router.get('/api/usuario/:id', personaController.find);
router.put('/api/usuario/:id', personaController.update);
router.delete('/api/usuario/:id', personaController.delete);


module.exports = router;
