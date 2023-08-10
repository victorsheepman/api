import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sales, SalesDocument } from './schemas/sales.schema';
import { Model } from 'mongoose';

@Injectable()
export class SalesService {
  constructor(
    //Definir un modelo para libros mediante inyección de dependencias
    @InjectModel(Sales.name)
    private readonly saleModel: Model<SalesDocument>,
  ) {}
  async create(createSaleDto: CreateSaleDto) {
    const sale = await this.saleModel.create(createSaleDto);
    return sale;
  }

  findAll() {
    return this.saleModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
