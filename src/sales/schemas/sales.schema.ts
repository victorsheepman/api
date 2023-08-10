/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { BraceletDocument } from 'src/bracelets/schemas/bracelets.schema';
export type SalesDocument = Sales & Document;

export type SaleDocument = Sales & Document;

@Schema()
export class Sales {
  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'Bracelet' }] }) 
  bracelets: BraceletDocument[]; 
  @Prop()
  amount: number;
  @Prop({ default: Date.now })
  createdAt: Date;
  client:{
    name:string,
    phone:number,
    id:number
  }
}

export const SalesSchema = SchemaFactory.createForClass(Sales)