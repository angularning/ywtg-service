import { PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateNoticeDto {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({
    example: 'topic',
  })
  msg_type: string;

  @ApiProperty({
    example: '消息内容',
  })
  content: string;

  @ApiProperty({
    // example: '平台(wx_applet:小程序，manage_system:管理系统)',
    example: 'wx_applet',
  })
  platform: string;

  @IsNotEmpty()
  @ApiProperty({
    example:
      // '平台(ywtg-applet:一网统管，yfgr-applet:以房管人，firecontrol-applet：防火安全)',
      'firecontrol-applet',
  })
  system_type: string;

  @IsNotEmpty()
  @ApiProperty({
    // example: '状态（0:禁用,1:启用）',
    example: '1',
  })
  state: string;

  @ApiProperty({
    example: '1',
  })
  is_flag: string;

  @ApiProperty({
    example: '社区ID',
  })
  community_id: string;

  @ApiProperty({
    example: '用户ID',
  })
  user_id: string;

  @ApiProperty({
    example: '创建人',
  })
  create_user: string;

  @ApiProperty({
    example: '修改人',
  })
  update_user: string;
  //
  // @ApiProperty({
  //   example: '创建时间',
  // })
  // create_time: string;
  //
  // @ApiProperty({
  //   example: '修改时间',
  // })
  // update_time: string;
}
