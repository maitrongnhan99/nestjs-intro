import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { MetaOptionsController } from './meta-options.controller';
import { MetaOptionsService } from './providers';
@Module({
  imports: [TypeOrmModule.forFeature([MetaOption])],
  controllers: [MetaOptionsController],
  providers: [MetaOptionsService],
})
export class MetaOptionsModule {}
