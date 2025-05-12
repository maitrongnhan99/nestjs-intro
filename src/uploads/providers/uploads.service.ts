import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileTypes } from '../enums/file-types.enum';
import { UploadFile } from '../interfaces/upload-file.interface';
import { Uploads } from '../uploads.entity';
import { UploadToS3Provider } from './upload-to-s3.provider';

@Injectable()
export class UploadsService {
  constructor(
    @InjectRepository(Uploads)
    private readonly uploadsRepository: Repository<Uploads>,

    private readonly uploadToS3Provider: UploadToS3Provider,
    private readonly configService: ConfigService,
  ) {}

  public async uploadFile(file: Express.Multer.File) {
    try {
      const supportFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!supportFileTypes.includes(file.mimetype)) {
        throw new BadRequestException('Unsupported file type');
      }
      console.log('@uploading', file);
      const name = await this.uploadToS3Provider.fileUpload(file);
      console.log('@uploading', name);
      const uploadFile: UploadFile = {
        name,
        path: `https://${this.configService.get('app.awsCloudFrontUrl') as string}/${name}`,
        type: FileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      };

      const upload = this.uploadsRepository.create(uploadFile);
      return await this.uploadsRepository.save(upload);
    } catch (error) {
      throw new ConflictException('Failed to upload file', {
        cause: error,
      });
    }
  }
}
