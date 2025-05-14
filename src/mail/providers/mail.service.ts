import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(user: User) {
    await this.mailerService.sendMail({
      to: user.email,
      from: 'Support Team <noreply@nestjs.com>',
      subject: 'Welcome to our app',
      template: 'welcome',
      context: {
        companyName: 'Blog App',
      },
    });
  }
}
