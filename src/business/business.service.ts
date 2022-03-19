import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Business, BusinessDocument } from './business.schema';
import { BusinessDto } from './businessDto';

@Injectable()
export class BusinessService {
    constructor(@InjectModel(Business.name) private businessModel: Model<BusinessDocument>) {}

    async create(businessDto: BusinessDto): Promise<Business> {
        const createdCat = new this.businessModel(businessDto);
        return createdCat.save();
      }


    async findAll(): Promise<Business[]> {
        const businesses = await this.businessModel.find().exec()
        return businesses;
    }
}
