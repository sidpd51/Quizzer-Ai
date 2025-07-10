import express from 'express';
import mongoose from 'mongoose';
import router from './routers/v1';
import { corsOptions, limiter, serverConfig } from './config';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(limiter);

app.use('/api/v1', router);

mongoose.connect('mongodb://localhost:27017/quizzer-ai').then(() => {
  app.listen(serverConfig.PORT, () => {
    console.log(`Server running on port ${serverConfig.PORT}`);
  });
});

