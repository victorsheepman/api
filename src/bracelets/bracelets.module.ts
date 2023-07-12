import { Module } from '@nestjs/common';
import { BraceletsService } from './bracelets.service';
import { BraceletsController } from './bracelets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bracelet, BraceletSchema } from './schemas/bracelets.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bracelet.name, schema: BraceletSchema },
    ]),
  ],
  controllers: [BraceletsController],
  providers: [BraceletsService],
})
export class BraceletsModule {}
