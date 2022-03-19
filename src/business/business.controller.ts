import { Controller, Post, Body, Get } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessDto } from './businessDto';

@Controller('business')
export class BusinessController {
    constructor(private businessService: BusinessService) {}

    @Post()
    async create(@Body() createBusinessDto: BusinessDto) {
        await this.businessService.create(createBusinessDto);
    }

    @Get()
    async findAll(): Promise<BusinessDto[]> {
        return this.businessService.findAll();
    }
}
