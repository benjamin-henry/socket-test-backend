import express from 'express';
import mongoose from 'mongoose';
import generate_mongo_url from './utils/generate_mongo_url.js'
import Channel from './schemas/ChannelSchema.js';

const router = express.Router();



router.post('/create', (req, res) => {
  const newChannel = req.body;
  Channel.create(newChannel, (err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  }) 
});

router.get('/read', (req, res) => {
  res.status(200).json({message: 'API - alert'});
});

module.exports = router;
