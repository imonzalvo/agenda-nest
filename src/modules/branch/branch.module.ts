import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BranchService } from './branch.service';
import { Branch, BranchSchema } from '../../entities/branch.schema';
import { Business, BusinessSchema } from '../../entities/business.schema';
import { BranchRepository } from 'src/repositories/branch.repository';
import { BusinessModule } from '../business/business.module';
import { BusinessRepository } from 'src/repositories/business.repository';


@Module({
  imports: [
    forwardRef(() => BusinessModule),
    MongooseModule.forFeature([{ name: Branch.name, schema: BranchSchema }]),
    MongooseModule.forFeature([{ name: Business.name, schema: BusinessSchema }])
  ],
  providers: [BranchService, BranchRepository],
  exports: [BranchService]
})
export class BranchModule {}
