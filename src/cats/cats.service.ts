import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './cats.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catsModule: Model<CatDocument>) {}
  async create(createCatDto: CreateCatDto) {
    const cat = await this.catsModule.create(createCatDto);
    return cat;
  }

  findAll() {
    return `This action returns all cats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
