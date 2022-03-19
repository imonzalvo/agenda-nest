import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Business } from 'src/entities/business.schema';

export type BranchDocument = Branch & Document;

@Schema()
export class Branch {
    @Prop()
    id: string

    @Prop()
    address: string

    @Prop()
    phone: string

    @Prop()
    email: string

    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    imageUrl: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Business' })
    business: Business;

    // business: string    Business   @relation(fields: [businessId], references: [id])
    // employees: string   Employee[]
    // services: string    Service[]
    // bookings: string    Booking[]
    // categories: string  Category[]

}

export const BranchSchema = SchemaFactory.createForClass(Branch)