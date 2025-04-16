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
});
