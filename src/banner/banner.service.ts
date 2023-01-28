import { Inject, Injectable } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { Repository } from 'typeorm';
import { Banner } from './entities/banner.entity';

@Injectable()
export class BannerService {
  constructor(
    @Inject('banner_rep')
    private bannerRep: Repository<Banner>,
  ) {}
  create(createBannerDto: CreateBannerDto) {
    return 'This action adds a new banner';
  }

  findAll() {
    return this.bannerRep.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} banner`;
  }

  update(id: number, updateBannerDto: UpdateBannerDto) {
    return `This action updates a #${id} banner`;
  }

  remove(id: number) {
    return `This action removes a #${id} banner`;
  }
}
