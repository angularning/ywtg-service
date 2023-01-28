import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { BannerProviders } from './banner.providers';
import { DatabaseModule } from '../common/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BannerController],
  providers: [BannerService, BannerProviders],
})
export class BannerModule {}
