import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileTypes } from '../enums/file-types.enum';
import { Uploads } from '../uploads.entity';

@Injectable()
export class UploadsService {
  constructor(
    @InjectRepository(Uploads)
    private readonly uploadsRepository: Repository<Uploads>,
  ) {}

  public async uploadFile(file: Express.Multer.File) {
    const upload = new Uploads();
    upload.name = file.originalname;
    upload.path = file.path;
    upload.type = FileTypes.IMAGE;
    upload.mime = file.mimetype;
    upload.size = file.size;
    await this.uploadsRepository.save(upload);
    return upload;
  }
}
