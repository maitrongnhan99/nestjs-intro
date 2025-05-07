import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  environment: process.env.NODE_ENV ?? 'development',
  apiVersion: process.env.API_VERSION ?? '0.0.1',
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_SECRECT_ACCESS_KEY,
  awsCloudfrontUrl: process.env.AWS_CLOUDFRONT_URL,
  awsBucketName: process.env.AWS_PUBLIC_BUCKET_NAME,
  awsRegion: process.env.AWS_REGION,
}));
