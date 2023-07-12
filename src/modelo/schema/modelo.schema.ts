/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ModeloDocument = Modelo & Document;

@Schema()
export class Modelo {
  @Prop({ required: true, unique: true })
  name: number;
  @Prop([{ name: String, hex: String }])
  color: { name: string, hex: string }[];
  @Prop()
  price:number

}

export const ModeloSchema = SchemaFactory.createForClass(Modelo)