/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { ModeloDocument } from '../../modelo/schema/modelo.schema';
export type BraceletDocument = Bracelet & Document;

@Schema()
export class Bracelet {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Modelo', required: true })
  model: ModeloDocument;

  @Prop()
  color: string;

  @Prop()
  size: string;
  
  @Prop()
  price: number;

  @Prop()
  sold: boolean;

}

export const BraceletSchema = SchemaFactory.createForClass(Bracelet)