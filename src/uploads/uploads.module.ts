import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadToS3Provider } from './providers/upload-to-s3.provider';
import { UploadsService } from './providers/uploads.service';
import { UploadsController } from './uploads.controller';
import { Uploads } from './uploads.entity';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, UploadToS3Provider],
  imports: [TypeOrmModule.forFeature([Uploads])],
})
export class UploadsModule {}
