import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('公告')
@Controller('notice')
export class NoticeController {
  constructor(
    private readonly noticeService: NoticeService,
    private readonly configService: ConfigService,
  ) {}

  @ApiOperation({
    summary: '新增公告',
  })
  @Post('/add')
  create(@Body() createNoticeDto: CreateNoticeDto) {
    return this.noticeService.create(createNoticeDto);
  }

  @Get()
  findAll() {
    return this.configService.get('API-HOST').name;
    // return this.noticeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoticeDto: UpdateNoticeDto) {
    return this.noticeService.update(+id, updateNoticeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noticeService.remove(+id);
  }
}
