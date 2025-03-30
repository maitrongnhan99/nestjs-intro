import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostsMetaOptionsDto } from './dtos';
import { MetaOption } from './meta-option.entity';
import { MetaOptionsService } from './providers';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @Get()
  async findAll(): Promise<MetaOption[]> {
    return this.metaOptionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MetaOption> {
    return this.metaOptionsService.findOne(parseInt(id));
  }

  @Post()
  async create(
    @Body() metaOption: CreatePostsMetaOptionsDto,
  ): Promise<MetaOption> {
    return this.metaOptionsService.create(metaOption);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() metaOption: MetaOption,
  ): Promise<MetaOption> {
    return this.metaOptionsService.update(parseInt(id), metaOption);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.metaOptionsService.delete(parseInt(id));
  }
}
