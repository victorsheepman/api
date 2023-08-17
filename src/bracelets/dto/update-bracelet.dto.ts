import { PartialType } from '@nestjs/mapped-types';
import { CreateBraceletDto } from './create-bracelet.dto';

export class UpdateBraceletDto extends PartialType(CreateBraceletDto) {
  id: string;
}
