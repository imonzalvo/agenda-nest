import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { Business, BusinessSchema } from '../../entities/business.schema';
import { BranchService } from 'src/modules/branch/branch.service';
import { BranchModule } from 'src/modules/branch/branch.module';
import { BusinessRepository } from 'src/repositories/business.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Business.name, schema: BusinessSchema }]),
    BranchModule
  ],
  controllers: [BusinessController],
  providers: [BusinessService, BusinessRepository],
  exports: [BusinessRepository]
})
export class BusinessModule {}
