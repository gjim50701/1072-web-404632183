var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/featured', function(req, res, next) {
//   res.render('featuredProd', { title: 'Featured' });
// });

const combinedController = require('../controllers/combined');

router.get('/', combinedController.getCombined);



module.exports = router;