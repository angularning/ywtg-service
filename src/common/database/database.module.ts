import { Module } from '@nestjs/common';
import { DatabaseProviders } from './data.base.provider';
@Module({
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders],
})
export class DatabaseModule {}
