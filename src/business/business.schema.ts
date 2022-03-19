import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BusinessDocument = Business & Document;

@Schema()
export class Business {
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
}

export const BusinessSchema = SchemaFactory.createForClass(Business)