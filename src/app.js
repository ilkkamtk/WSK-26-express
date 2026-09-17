import api from './api/index.js';
import express from 'express';
import {errorHandler, notFoundHandler} from './middelwares/error-handlers.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1', api);

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

// Default for all routes not handled by routers above
app.use(notFoundHandler);
// Add error handler middleware as the last middleware in the chain
app.use(errorHandler);

export default app;
