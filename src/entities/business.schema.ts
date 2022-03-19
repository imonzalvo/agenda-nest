import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsOptional } from 'class-validator';
import * as mongoose from 'mongoose';
import { Branch } from 'src/entities/branch.schema';

export type BusinessDocument = Business & Document;

@Schema()
export class Business {
    @Prop()
    @IsOptional()
    id: string

    @Prop()
    name: string
    
    @Prop()
    email: string
    
    @Prop()
    phone: string
    
    @Prop()
    handle: string
    
    @Prop()
    website: string
    
    @Prop()
    instagramUrl: string
    
    @Prop()
    facebookUrl: string

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Branch' }] })
    branches: Branch[];
}

export const BusinessSchema = SchemaFactory.createForClass(Business)