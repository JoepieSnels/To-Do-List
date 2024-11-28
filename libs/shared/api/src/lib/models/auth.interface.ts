/**
 * User information required for loggin in
 *
 */
import { UserGender } from './user.interface';
export interface IUserCredentials {
    emailAddress: string;
    password: string;
}

/**
 * User information required for registration
 */
export interface IUserRegistration extends IUserCredentials {
    name: string;
    profileImgUrl: string;
    gender: UserGender;
}

export interface IToken {
    token: string;
}
