var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/featured', function(req, res, next) {
//   res.render('featuredProd', { title: 'Featured' });
// });

const agentsController = require('../controllers/agents');

router.get('/', agentsController.getAgents);



module.exports = router;