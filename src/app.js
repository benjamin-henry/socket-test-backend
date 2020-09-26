const express =require('express');
const cors = require('cors');
const middlewares = require('./middlewares.js');
const api = require('./api/api.js');

const app = express();

// app.use(morgan('dev'));
// app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: "socket-io-server"
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
