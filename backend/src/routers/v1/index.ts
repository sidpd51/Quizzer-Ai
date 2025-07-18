import express from 'express';
import { getUserInfoHandler, signInHandler, signUpHandler } from '../../controllers/user.controller';
import { validateRequetBody } from '../../validators';
import { signInSchema } from '../../validators/user.validator';
import { authenticateMiddleware } from '../../middlewares/auth.middleware';
import { createTestHandler } from '../../controllers/test.controller';
import { testSchema } from '../../validators/test.validator';

const router = express.Router();


router.post('/signup', signUpHandler);
router.post('/signin', validateRequetBody(signInSchema), signInHandler);
router.get('/user/me', authenticateMiddleware, getUserInfoHandler);
router.post('/tests', validateRequetBody(testSchema), createTestHandler);

export default router;