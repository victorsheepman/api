import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreateBraceletDto {
  @ApiProperty({
    example: 1,
  })
  readonly model: number;

  @ApiProperty({
    example: '#ffffff',
  })
  readonly color: string;

  @ApiProperty({
    example: 'M',
  })
  readonly size: string;

  @ApiProperty({
    example: 20,
  })
  readonly price: number;
  @IsBoolean()
  sold = false;
}
