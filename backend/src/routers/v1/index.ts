import express from 'express';
import { signInHandler, signUpHandler } from '../../controllers/user.controller';
import { validateRequetBody } from '../../validators';
import { signInSchema } from '../../validators/user.validator';

const router = express.Router();


router.post('/signup', signUpHandler);
router.post('/signin', validateRequetBody(signInSchema), signInHandler);

export default router;