import { getUserByEmail } from '../repositories/user.repository';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import { serverConfig } from '../config';

export const signInService = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    serverConfig.JWT_SECRET,
    { expiresIn: serverConfig.JWT_EXPIRES_IN as SignOptions['expiresIn'] } // FIXED TYPE
  );

  return token;
};