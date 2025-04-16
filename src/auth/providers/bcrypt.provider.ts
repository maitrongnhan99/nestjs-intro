import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class BcryptProvider implements HashingProvider {
  async hashPassword(password: string | Buffer): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(10, 'a');
      return await bcrypt.hash(password, salt);
    } catch (_error) {
      throw new Error('Failed to hash password');
    }
  }

  async comparePassword(
    password: string | Buffer,
    hash: string,
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hash);
    } catch (_error) {
      throw new Error('Failed to compare password');
    }
  }
}
