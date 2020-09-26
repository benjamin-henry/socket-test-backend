const express = require('express');
const mongoose = require('mongoose');
const generate_mongo_url = require('./utils/generate_mongo_url.js')
const Alert = require('./schemas/AlertSchema.js');
const {v4:uuidV4} = require('uuid')

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
  newAlert.uid = uuidV4()
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

module.exports = router;
