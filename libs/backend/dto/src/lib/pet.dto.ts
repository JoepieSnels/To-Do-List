import { IsString, IsNotEmpty, IsDate, IsBoolean } from 'class-validator';
import exp = require('constants');

export class PetCreateDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    breed!: string;

    @IsString()
    @IsNotEmpty()
    imgUrl!: string;

    @IsString()
    @IsNotEmpty()
    lastFed!: string;

    @IsBoolean()
    @IsNotEmpty()
    energetic!: boolean;

    @IsBoolean()
    @IsNotEmpty()
    sick!: boolean;
}

export class PetInfoDto extends PetCreateDto {
    @IsString()
    @IsNotEmpty()
    _id!: string;
}
export class PetUpdateDto {
    @IsString()
    @IsNotEmpty()
    _id!: string;

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    breed!: string;

    @IsString()
    @IsNotEmpty()
    imgUrl!: string;
}
