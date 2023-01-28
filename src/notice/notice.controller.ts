import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Request,
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

  @ApiOperation({
    summary: '查询 system_type为某个值的公告',
  })
  @Get('/list')
  list(@Request() req) {
    const system_type = req.query.system_type;
    return this.noticeService.getAll(system_type);
  }

  @ApiOperation({
    summary: '查询单个公告详情',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticeService.findOne(id);
  }

  @ApiOperation({
    summary: '删除公告',
  })
  @Post('/del')
  remove(@Body() params) {
    const id = params.id;
    return this.noticeService.remove(id);
  }

  @ApiOperation({
    summary: '修改公告 传id, content',
  })
  @Post('/update')
  update(@Body() params) {
    return this.noticeService.update(params);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNoticeDto: UpdateNoticeDto) {
  //   return this.noticeService.update(+id, updateNoticeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.noticeService.remove(+id);
  // }
}
