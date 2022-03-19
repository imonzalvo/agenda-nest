import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Branch, BranchDocument } from '../../entities/branch.schema';
import { Business, BusinessDocument } from '../../entities/business.schema';
import { BranchDto } from './dto/branch.dto';
import { BranchRepository } from 'src/repositories/branch.repository';
import { BusinessRepository } from 'src/repositories/business.repository';

@Injectable()
export class BranchService {
    constructor(
        private readonly branchRepository: BranchRepository,
        private readonly businessRepository: BusinessRepository,
        ) {}


    async create(
            businessId: string,
            branchDto: BranchDto): Promise<Branch> {

        const createdBranch = await this.branchRepository.create(branchDto, businessId);

        this.businessRepository.addBranch(businessId, createdBranch);

        return createdBranch;
    }

    async findBranchesByBusinessId(businessId: string): Promise<Branch[]> {
        return this.branchRepository.findAllByBusinessId(businessId);
    }

    async findBranchById(id: string): Promise<Branch> {
        return await this.branchRepository.findBranchById(id);
    }

    async deleteBranch(branchId: string, businessId: string) {
        await this.businessRepository.removeBranch(businessId, branchId);

        await this.branchRepository.delete(branchId);
    }
}
