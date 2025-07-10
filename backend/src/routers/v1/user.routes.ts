// src/routers/v1/user.routes.ts
import express from 'express';
import { signInHandler } from '../../controllers/user.controller';

const router = express.Router();

router.post('/signin', signInHandler); // ✅ Correct usage

export default router;
