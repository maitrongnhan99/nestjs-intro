import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MailService } from './providers/mail.service';

@Global()
@Module({
  providers: [MailService],
  exports: [MailService],
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          transport: {
            host: configService.get('app.mailHost') as string,
            port: 2525,
            secure: false,
            auth: {
              user: configService.get('app.smtpUsername') as string,
              pass: configService.get('app.smtpPassword') as string,
            },
            defaults: {
              from: 'My App <maitrongnhan99@gmail.com>',
            },
          },
          template: {
            dir: join(__dirname, 'templates'),
            adapter: new EjsAdapter(),
            options: {
              strict: false,
            },
          },
        };
      },
    }),
  ],
})
export class MailModule {}
