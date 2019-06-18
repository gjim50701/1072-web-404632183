const express = require('express');
const router = express.Router();

const teamController = require('../controllers/team');

router.get('/', teamController.getTeam);

module.exports = router;