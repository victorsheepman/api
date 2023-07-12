import { Injectable } from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { Modelo, ModeloDocument } from './schema/modelo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ModeloService {
  constructor(
    @InjectModel(Modelo.name)
    private readonly modeloModel: Model<ModeloDocument>,
  ) {}
  async create(createModeloDto: CreateModeloDto) {
    const createdModelo = await this.modeloModel.create(createModeloDto);
    return createdModelo;
  }

  findAll(request: Request): Promise<Modelo[]> {
    return this.modeloModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} modelo`;
  }

  update(id: number, updateModeloDto: UpdateModeloDto) {
    return `This action updates a #${id} modelo`;
  }

  remove(id: number) {
    return `This action removes a #${id} modelo`;
  }
}
