import { PartialType } from '@nestjs/swagger';
import { CreateWDto } from './create-w.dto';

export class UpdateWDto extends PartialType(CreateWDto) {}
