import { Inject, Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { Repository } from 'typeorm';
import { base_message_info } from './entities/notice.mysql.entity';
import { BusinessException } from '../common/exceptions/business.exception';

@Injectable()
export class NoticeService {
  constructor(
    @Inject('NOTICE_REPOSITORY')
    private noticeRepository: Repository<base_message_info>,
  ) {}
  async create(params: CreateNoticeDto) {
    console.log('params', params);
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

  findAll() {
    return `This action returns all notice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notice`;
  }

  update(id: number, updateNoticeDto: UpdateNoticeDto) {
    return `This action updates a #${id} notice`;
  }

  remove(id: number) {
    return `This action removes a #${id} notice`;
  }
}
