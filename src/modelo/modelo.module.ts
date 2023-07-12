import { Module } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Modelo, ModeloSchema } from './schema/modelo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Modelo.name, schema: ModeloSchema }]),
  ],
  controllers: [ModeloController],
  providers: [ModeloService],
})
export class ModeloModule {}
