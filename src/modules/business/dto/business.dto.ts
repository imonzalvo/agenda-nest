import { IsString, IsOptional } from 'class-validator';

export class BusinessDto {
    
    @IsString()
    name: string
    
    @IsString()
    email: string
    
    @IsString()
    phone: string
    
    @IsString()
    handle: string
    
    @IsString()
    @IsOptional()
    website: string
    
    @IsString()
    @IsOptional()
    instagramUrl: string
    
    @IsString()
    @IsOptional()
    facebookUrl: string
    // owner:        User         @relation(fields: [ownerId], references: [id])
    // branches:     Branch[]
  }
  