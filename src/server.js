import express from 'express';
import config from '../config/config.js';
import routes from './routes.js';

const app = express();
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running in ${config.env} mode on port ${PORT}`);
});

app.use(express.json());
app.use('/api', routes);