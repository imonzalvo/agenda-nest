import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Business, BusinessDocument } from "src/entities/business.schema";
import { Injectable } from '@nestjs/common';
import { BusinessDto } from 'src/modules/business/dto/business.dto';
import { Branch } from 'src/entities/branch.schema';

@Injectable()
export class BusinessRepository {
    constructor(@InjectModel(Business.name) private businessModel: Model<BusinessDocument>) {}

    async create(businessDto: BusinessDto): Promise<Business> {
        const createdBusiness = new this.businessModel(businessDto);
        return createdBusiness.save();

    }

    async findAll(): Promise<Business[]> {
        const businesses = await this.businessModel.find().exec()
        return businesses;
    }

    async findById(businessId: string): Promise<Business> {
        return await this.businessModel.findById(businessId)
    }

    async addBranch(businessId: string, branch: Branch) {
        const businessById = await this.businessModel.findById(businessId);
        businessById.branches.push(branch);

        await businessById.save();
    }

    async removeBranch(businessId: string, branchId: string) {
        const businessById = await this.businessModel.findById(businessId);
        await businessById.updateOne( { $pull: { branches: branchId } } ).exec();
    }
 }