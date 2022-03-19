import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
            BusinessModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
