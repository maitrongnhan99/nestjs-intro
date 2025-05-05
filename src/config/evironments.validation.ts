import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'staging')
    .required()
    .default('development'),
  DATABASE_HOST: Joi.string().required().default('localhost'),
  DATABASE_PORT: Joi.number().required().default(5432),
  DATABASE_USERNAME: Joi.string().required().default('postgres'),
  DATABASE_PASSWORD: Joi.string().required().default('postgres'),
  DATABASE_NAME: Joi.string().required().default('postgres'),
  DATABASE_SYNCHRONIZE: Joi.boolean().required().default(true),
  DATABASE_AUTOLOAD: Joi.boolean().required().default(true),
  PROFILE_API_KEY: Joi.string().required().default('some-secret-key'),
  JWT_SECRET: Joi.string().required().default('some-secret-key-for-jwt'),
  JWT_TOKEN_AUDIENCE: Joi.string().required().default('localhost:3000'),
  JWT_TOKEN_ISSUER: Joi.string().required().default('localhost:3000'),
  JWT_ACCESS_TOKEN_TTL: Joi.number().required().default(3600),
  JWT_REFRESH_TOKEN_TTL: Joi.number().required().default(86400),
  GOOGLE_AUTH_CLIENT_ID: Joi.string().required(),
  GOOGLE_AUTH_CLIENT_SECRET: Joi.string().required(),
});
