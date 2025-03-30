import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostsMetaOptionsDto } from '../dtos';
import { MetaOption } from '../meta-option.entity';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  async create(metaOption: CreatePostsMetaOptionsDto): Promise<MetaOption> {
    return this.metaOptionRepository.save(metaOption);
  }

  async findAll(): Promise<MetaOption[]> {
    return this.metaOptionRepository.find();
  }

  async findOne(id: number): Promise<MetaOption> {
    const metaOption = await this.metaOptionRepository.findOne({
      where: { id },
    });
    if (!metaOption) {
      throw new NotFoundException('Meta option not found');
    }
    return metaOption;
  }

  async update(id: number, metaOption: MetaOption): Promise<MetaOption> {
    await this.metaOptionRepository.update(id, metaOption);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.metaOptionRepository.delete(id);
  }
}
