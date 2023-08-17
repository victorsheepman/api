import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBraceletDto } from './dto/create-bracelet.dto';
import { UpdateBraceletDto } from './dto/update-bracelet.dto';
import { Bracelet, BraceletDocument } from './schemas/bracelets.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BraceletsService {
  braceletRepository: any;
  //Añadir un constructor
  constructor(
    //Definir un modelo para libros mediante inyección de dependencias
    @InjectModel(Bracelet.name)
    private readonly braceletModel: Model<BraceletDocument>,
  ) {}
  //	Cambiar a async y que devuelva Promise<Book> con el libro creado
  async create(createBraceletDto: CreateBraceletDto) {
    const bracelets = await this.braceletModel.create(createBraceletDto);
    return bracelets;
  }

  async createMany(createBraceletDto: CreateBraceletDto[]) {
    const bracelets = await this.braceletModel.insertMany(createBraceletDto);
    return bracelets;
  }

  async updateMany(
    updateBraceletDtos: UpdateBraceletDto[],
  ): Promise<Bracelet[]> {
    if (!Array.isArray(updateBraceletDtos)) {
      throw new Error('updateBraceletDtos should be an array');
    }
    const updatedBracelets: Bracelet[] = [];

    for (const updateDto of updateBraceletDtos) {
      if (!updateDto.id) {
        throw new NotFoundException(`ID is required for updating a bracelet`);
      }

      const existingBracelet = await this.braceletModel.findOne({
        _id: updateDto.id,
      });

      if (!existingBracelet) {
        throw new NotFoundException(
          `Bracelet with ID ${updateDto.id} not found`,
        );
      }
      existingBracelet.sold = updateDto.sold;
      const updatedBracelet = await existingBracelet.save();

      updatedBracelets.push(updatedBracelet);
    }

    return updatedBracelets;
  }
  findAll(request: Request): Promise<Bracelet[]> {
    return this.braceletModel.find().exec();
  }

  findOne(id: string): Promise<Bracelet> {
    return this.braceletModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateBraceletDto: UpdateBraceletDto) {
    return this.braceletModel.findOneAndUpdate({ _id: id }, updateBraceletDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.braceletModel.findByIdAndRemove({ _id: id }).exec();
  }
}
