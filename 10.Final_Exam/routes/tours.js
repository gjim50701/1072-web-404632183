var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/featured', function(req, res, next) {
//   res.render('featuredProd', { title: 'Featured' });
// });

const toursController = require('../controllers/tours');

router.get('/recent', toursController.getRecent);
router.get('/gallery', toursController.getGallery);


module.exports = router;