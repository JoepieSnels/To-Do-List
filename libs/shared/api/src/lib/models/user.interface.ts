// import { IEntity } from 'libs/share-a-meal/common/src/lib/entity/entity.model';
import { IMeal } from './meal.interface';
import { IToken, IUserRegistration } from './auth.interface';
import { Id } from './id.type';

export enum UserMood {
    Happy = 'Happy',
    Moderate = 'Moderate',
    Sad = 'Sad',
    Mad = 'Mad'
}

export enum UserGender {
    Male = 'Male',
    Female = 'Female',
    None = 'None',
    Unknown = 'Unknown'
}

/**
 * Minimal user information
 */

export interface IUserIdentity {
    // extends IEntity {
    name: string;
    emailAddress: string;
    profileImgUrl: string;

    token?: string;
}

/**
 * All user information, excl. domain entities
 */
export interface IUserInfo extends IUserRegistration {
    _id: Id;
    profileImgUrl: string;
    mood: UserMood;
    gender: UserGender;
    coins: number;
}

/**
 * All user information, incl. domain entities
 */
export interface IUser extends IUserInfo {}

export type ICreateUser = Pick<IUser, 'name' | 'password' | 'emailAddress'>;
export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;
