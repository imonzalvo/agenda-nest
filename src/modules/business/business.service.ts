import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Business, BusinessDocument } from '../../entities/business.schema';
import { BusinessDto } from './dto/business.dto';
import { BusinessRepository } from 'src/repositories/business.repository';

@Injectable()
export class BusinessService {
    constructor(private readonly businessRepository: BusinessRepository) {}

    async create(businessDto: BusinessDto): Promise<Business> {
        const createdBusiness = await this.businessRepository.create(businessDto);
        return createdBusiness;
    }

    async findAll(): Promise<Business[]> {
        return await this.businessRepository.findAll()
    }
}
