const express = require('express');
const { start } = require('../controller/start.js');

const router = express.Router();

router.get('/', start);

module.exports = router;
