// src/controllers/user.controller.ts
import { Request, Response } from 'express';
import { signInService } from '../services/user.service';
import { signInSchema } from '../validators/user.validator';

export const signInHandler = async (req: Request, res: Response) => {
  try {
    const validated = signInSchema.safeParse(req.body);
    if (!validated.success) {
      return res.status(400).json({ errors: validated.error.errors });
    }

    const { email, password } = validated.data;
    const token = await signInService(email, password);
    return res.status(200).json({ token });
  } catch (error: any) {
    if (error.message === 'User not found') {
      return res.status(404).json({ message: 'User not found' });
    }
    if (error.message === 'Invalid credentials') {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
};
