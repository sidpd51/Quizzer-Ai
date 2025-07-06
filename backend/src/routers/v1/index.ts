import express from 'express';
import { signUpHandler } from '../../controllers/user.controller';

const router = express.Router();


router.post('/signup', signUpHandler);

export default router;