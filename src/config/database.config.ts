import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: Number(process.env.DATABASE_PORT ?? 5432),
  username: process.env.DATABASE_USERNAME ?? 'postgres',
  password: process.env.DATABASE_PASSWORD ?? 'maitrongnhan99',
  database: process.env.DATABASE_NAME ?? 'nestjs-blog',
  synchronize: process.env.DATABASE_SYNC === 'true',
  autoLoad: process.env.DATABASE_AUTOLOAD === 'true',
}));
