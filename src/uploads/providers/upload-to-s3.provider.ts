import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import * as path from 'path';

@Injectable()
export class UploadToS3Provider {
  constructor(private readonly configService: ConfigService) {}

  public async fileUpload(file: Express.Multer.File) {
    try {
      const s3 = new S3();
      const upload = await s3
        .upload({
          Bucket: this.configService.get('app.awsBucketName') as string,
          Key: this.generateFileName(file),
          Body: file.buffer,
          ContentType: file.mimetype,
        })
        .promise();
      console.log('@uploading', upload, s3);
      return upload.Key;
    } catch (error) {
      throw new RequestTimeoutException('Timeout uploading file to S3', {
        cause: error,
      });
    }
  }

  private generateFileName(file: Express.Multer.File) {
    let name = file.originalname.split('.')[0];
    const extension = path.extname(file.originalname);
    name = name.replace(/ /g, '-').trim();
    const timestamp = Date.now();
    return `${name}-${timestamp}${extension}`;
  }
}
