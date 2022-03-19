import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessModule } from './modules/business/business.module';
import { BranchModule } from './modules/branch/branch.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
            BusinessModule,
            BranchModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
