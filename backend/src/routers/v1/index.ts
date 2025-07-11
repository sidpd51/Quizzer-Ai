import express from 'express';
import { getUserInfoHandler, signInHandler, signUpHandler } from '../../controllers/user.controller';
import { validateRequetBody } from '../../validators';
import { signInSchema } from '../../validators/user.validator';
import { authenticateMiddleware } from '../../middlewares/auth.middleware';

const router = express.Router();


router.post('/signup', signUpHandler);
router.post('/signin', validateRequetBody(signInSchema), signInHandler);
router.get('/user/me', authenticateMiddleware, getUserInfoHandler);

export default router;