import express from 'express';
import alert from './alert.js';
// import channel from './channel.js';

const  router = express.Router();
// router.use('/channel', channel)
router.use('/alert', alert);

export default router;
