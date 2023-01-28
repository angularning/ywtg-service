import { Banner } from './entities/banner.entity';
export const BannerProviders = {
  provide: 'banner_rep',
  useFactory: async (AppDataSource) =>
    await AppDataSource.getRepository(Banner),
  inject: ['myDatabase'],
};
