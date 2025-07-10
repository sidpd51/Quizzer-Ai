import express from 'express';
import cors from 'cors';
import routerV1 from './routers/v1';
import { serverConfig } from './config';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', routerV1);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
});
