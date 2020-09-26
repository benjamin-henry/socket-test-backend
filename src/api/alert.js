import express from 'express';
import mongoose from 'mongoose';
import generate_mongo_url from './utils/generate_mongo_url.js'
import Alert from './schemas/AlertSchema.js';
import {v4} from 'uuid'

const connection_url = generate_mongo_url("alertpusherdb")


mongoose.connect(
  connection_url,{
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);


const router = express.Router();
router.post('/create', (req, res) => {
  const newAlert = req.body;
  newAlert.uid = v4()
  Alert.create(newAlert, (err, data) => {
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

export default router;
