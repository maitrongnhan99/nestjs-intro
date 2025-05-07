import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiHeaders, ApiOperation } from '@nestjs/swagger';
import { UploadsService } from './providers/uploads.service';
@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  @ApiHeaders([
    {
      name: 'Authorization',
      description: 'Bearer token',
    },
    {
      name: 'Content-Type',
      description: 'multipart/form-data',
    },
  ])
  @ApiOperation({
    summary: 'Upload a file',
    description: 'Upload a file to the server',
  })
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadsService.uploadFile(file);
  }
}
