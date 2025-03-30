import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTagDto } from './dtos';
import { TagsService } from './providers/tags.service';

@Controller('tags')
@ApiTags('Tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tags' })
  @ApiResponse({ status: 200, description: 'Return all tags' })
  findAll() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tag by ID' })
  @ApiResponse({ status: 200, description: 'Return a tag by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'The ID of the tag' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiResponse({ status: 201, description: 'Return the created tag' })
  create(@Body() tag: CreateTagDto) {
    return this.tagsService.create(tag);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a tag by ID' })
  @ApiResponse({ status: 200, description: 'Return the deleted tag' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.delete(id);
  }

  @Delete('/soft/:id')
  @ApiOperation({ summary: 'Soft delete a tag by ID' })
  @ApiResponse({ status: 200, description: 'Return the soft deleted tag' })
  softDelete(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.softDelete(id);
  }
}
