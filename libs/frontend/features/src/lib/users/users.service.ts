import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserInfo, UserGender, UserRole } from '@avans-nx-workshop/shared/api';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly users: IUserInfo[] = [
        {
            _id: 1,
            name: 'robin',
            emailAddress: 'usereen@host.com',
            password: 'secret',
            role: UserRole.Admin,
            gender: UserGender.Male,
            isActive: true,
            profileImgUrl: 'url'
        },
        {
            _id: 2,
            name: 'Davide',
            emailAddress: 'usertwee@host.com',
            password: 'secret',
            role: UserRole.Admin,
            gender: UserGender.Male,
            isActive: true,
            profileImgUrl: 'url'
        }
    ];

    constructor() {
        console.log('Service constructor aangeroepen');
    }

    getUsers(): IUserInfo[] {
        console.log('getUsers aangeroepen');
        return this.users;
    }

    getUsersAsObservable(): Observable<IUserInfo[]> {
        console.log('getUsersAsObservable aangeroepen');
        // 'of' is een rxjs operator die een Observable
        // maakt van de gegeven data.
        return of(this.users);
    }

    getUserById(id: number): IUserInfo {
        console.log('getUserById aangeroepen');
        return this.users.filter((user) => user._id === id)[0];
    }
}
