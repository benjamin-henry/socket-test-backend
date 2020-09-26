const express = require('express');
const alert = require('./alert.js');
// import channel from './channel.js';

const  router = express.Router();
// router.use('/channel', channel)
router.use('/alert', alert);

module.exports = router;
