import express from 'express';
import cors from 'cors';

import middlewares from './middlewares.js';
import api from './api/api.js';

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

// app.use('/api/v1', api);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

export default app;
