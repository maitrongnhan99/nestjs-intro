import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'aws-sdk';
import { AppModule } from './app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  /**
   * Initial Swagger
   */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS Blog API')
    .setDescription(
      'API for managing blog posts, based on NestJS, based url is http://localhost:3000',
    )
    .setTermsOfService('https://localhost:3000/terms-of-service')
    .setLicense('MIT License', 'https://opensource.org/licenses/MIT')
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  //set up aws sdk
  const configService = app.get(ConfigService);
  config.update({
    credentials: {
      accessKeyId: configService.get('app.awsAccessKeyId') as string,
      secretAccessKey: configService.get('app.awsSecretAccessKey') as string,
    },
    region: configService.get('app.awsRegion') as string,
  });

  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then(() => {
    console.log('🚀 Server is running on port 3000');
  })
  .catch((error) => {
    console.error(error);
  });
