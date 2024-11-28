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

    @IsString()
    @IsNotEmpty()
    profileImgUrl: string = '';

    @IsString()
    @IsNotEmpty()
    gender!: UserGender;
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

    @IsString()
    @IsNotEmpty()
    profileImgUrl = '';

    @IsString()
    @IsNotEmpty()
    mood: UserMood = UserMood.Happy;

    @IsString()
    @IsNotEmpty()
    gender: UserGender = UserGender.Unknown;
    @IsNumber()
    @IsNotEmpty()
    coins!: number;
}

export class UpdateUserDto implements IUpdateUser {
    _id?: string | undefined;

    @IsString()
    @IsOptional()
    name!: string;
}
