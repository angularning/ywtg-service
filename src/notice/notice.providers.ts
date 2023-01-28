import { base_message_info } from './entities/notice.entity';
export const NoticeProviders = {
  provide: 'NOTICE_REPOSITORY',
  useFactory: async (AppDataSource) =>
    await AppDataSource.getRepository(base_message_info),
  inject: ['myDatabase'],
};
