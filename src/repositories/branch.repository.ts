import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { Branch, BranchDocument } from 'src/entities/branch.schema';
import { BranchDto } from 'src/modules/branch/dto/branch.dto';

@Injectable()
export class BranchRepository {
    constructor(@InjectModel(Branch.name) private branchModel: Model<BranchDocument>) {}

    async create(branchDto: BranchDto, businessId: string): Promise<Branch> {
        const createdBusiness = new this.branchModel({ ...branchDto, business: businessId });
        return createdBusiness.save();
    }

    async findAllByBusinessId(businessId: string): Promise<Branch[]> {
        return await this.branchModel.find({ businessId }).populate('business')
    }

    async findBranchById(id: string): Promise<Branch> {
        return await (await this.branchModel.findById(id)).populate('business');
    }

    async delete(branchId: string) {
        await this.branchModel.findByIdAndDelete(branchId)
    }
}