import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Tag } from '../tag.entity';

export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  public async findAll() {
    return await this.tagsRepository.find();
  }

  public async findOne(id: number) {
    return await this.tagsRepository.findOne({ where: { id } });
  }

  public async create(createTagDto: CreateTagDto) {
    const newTag = this.tagsRepository.create(createTagDto);
    return await this.tagsRepository.save(newTag);
  }

  public async delete(id: number) {
    await this.tagsRepository.delete(id);

    return {
      deleted: true,
      id,
    };
  }

  public async findAllByIds(ids: number[]) {
    return await this.tagsRepository.find({ where: { id: In(ids) } });
  }

  public async softDelete(id: number) {
    await this.tagsRepository.softDelete(id);

    return {
      deleted: true,
      id,
    };
  }
}
