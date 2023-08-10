import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { BraceletDocument } from 'src/bracelets/schemas/bracelets.schema';

export class CreateSaleDto {
  @IsArray()
  @IsNotEmpty()
  bracelets: BraceletDocument[];

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
