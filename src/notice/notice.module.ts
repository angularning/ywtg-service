import { Module } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { NoticeController } from './notice.controller';
import { DatabaseModule } from '../common/database/database.module';
import { NoticeProviders } from './notice.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticeController],
  providers: [NoticeService, NoticeProviders],
})
export class NoticeModule {}
