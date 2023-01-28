import { Inject, Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { Repository, Equal } from 'typeorm';
import { base_message_info } from './entities/notice.entity';
import { BusinessException } from '../common/exceptions/business.exception';

@Injectable()
export class NoticeService {
  constructor(
    @Inject('NOTICE_REPOSITORY')
    private noticeRepository: Repository<base_message_info>,
  ) {}
  async create(params: CreateNoticeDto) {
    const notice = new base_message_info();
    notice.content = params.content;
    notice.system_type = params.system_type;
    notice.state = params.state;
    notice.platform = params.platform || 'wx_applet';
    return await this.noticeRepository
      .save(notice)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw new BusinessException(err);
      });
    // return 'This action adds a new notice';
  }

  async getAll(system_type: string) {
    return await this.noticeRepository.find({
      where: {
        system_type: system_type,
      },
    });
    // .createQueryBuilder('notice')
    // .orderBy('id', 'DESC')
    // .where('notice.system_type = :system_type', { system_type: system_type })
    // .getMany();
  }
  async findOne(id: any) {
    return await this.noticeRepository.find({
      where: {
        id,
      },
    });
  }

  async update(params) {
    return await this.noticeRepository
      .createQueryBuilder()
      .update(base_message_info)
      .set({ content: params.content })
      .where('id = :id', { id: params.id })
      .execute();
  }

  async remove(id) {
    return await this.noticeRepository
      .createQueryBuilder()
      .delete()
      .from(base_message_info)
      .where('id = :id', { id: id })
      .execute();
  }
}
