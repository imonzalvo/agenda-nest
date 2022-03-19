import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';

import { BusinessService } from './business.service';
import { BusinessDto } from './dto/business.dto';
import { BranchDto } from 'src/modules/branch/dto/branch.dto';
import { BranchService } from 'src/modules/branch/branch.service';
import { Branch } from 'src/entities/branch.schema';

@Controller('business')
export class BusinessController {
    constructor(private businessService: BusinessService,
            private branchService: BranchService) {}

    @Post()
    async create(@Body() createBusinessDto: BusinessDto) {
        return await this.businessService.create(createBusinessDto);
    }

    @Get()
    async findAll(): Promise<BusinessDto[]> {
        return this.businessService.findAll();
    }

    @Post("/:id/branch")
    async addBranchToBusiness(
        @Param('id') businessId: string,
        @Body() branchDto: BranchDto) {
        return this.branchService.create(businessId, branchDto);
    }

    @Get("/:id/branch")
    async getBusinessBranches(
        @Param('id') businessId: string): Promise<Branch[]> {
        return this.branchService.findBranchesByBusinessId(businessId);
    }

    @Delete("/:id/branch/:branchId")
    async deleteBranch(
        @Param('id') businessId: string,
        @Param('branchId') branchId: string) {
        await this.branchService.deleteBranch(branchId, businessId);
    }
}
