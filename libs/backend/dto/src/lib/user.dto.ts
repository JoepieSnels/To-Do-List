import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsNumber
} from 'class-validator';
import {
    // ICreateUser,
    IUpdateUser,
    IUpsertUser,
    IUserRegistration,
    Id,
    UserGender,
    UserMood
} from '@avans-nx-workshop/shared/api';
import { Meal } from '@avans-nx-workshop/backend/features';

export class CreateUserDto implements IUserRegistration {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    emailAddress!: string;
}

export class UpsertUserDto implements IUpsertUser {
    _id!: Id;

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    emailAddress!: string;

    @IsBoolean()
    @IsNotEmpty()
    isActive!: boolean;

    @IsString()
    @IsNotEmpty()
    profileImgUrl = '';

    @IsString()
    @IsNotEmpty()
    meals: Meal[] = [];

    @IsString()
    @IsNotEmpty()
    mood: UserMood = UserMood.Happy;

    @IsString()
    @IsNotEmpty()
    gender: UserGender = UserGender.Unknown;

    @IsNumber()
    @IsNotEmpty()
    coins: number = 0;
}

export class UpdateUserDto implements IUpdateUser {
    _id?: string | undefined;

    @IsString()
    @IsOptional()
    name!: string;
}
