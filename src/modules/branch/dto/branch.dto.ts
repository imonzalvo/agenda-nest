import { IsString, IsOptional } from 'class-validator';

export class BranchDto {
    @IsString()
    address: string

    @IsString()
    phone: string

    @IsString()
    email: string

    @IsString()
    name: string

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    @IsOptional()
    imageUrl: string
}
  