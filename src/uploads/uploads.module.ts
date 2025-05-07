import { Module } from '@nestjs/common';
import { UploadsService } from './providers/uploads.service';
import { UploadsController } from './uploads.controller';
import { UploadToS3Provider } from './providers/upload-to-s3.provider';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, UploadToS3Provider],
})
export class UploadsModule {}
