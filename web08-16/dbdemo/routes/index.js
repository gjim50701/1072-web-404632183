var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const bizpageController = require('../controllers/bizpage');
router.get('/', bizpageController.getBizPage);
module.exports = router;
