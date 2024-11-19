import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IUserInfo, UserGender, UserMood } from '@avans-nx-workshop/shared/api';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly users: IUserInfo[] = [
        {
            _id: '1',
            name: 'Robin Schellius',
            emailAddress: 'r.schellius@avans.nl',
            mood: UserMood.Mad,
            gender: UserGender.Male,
            password: 'secret',
            isActive: true,
            profileImgUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
            coins: 0
        },
        {
            _id: '2',
            name: 'Davide Ambesi',
            emailAddress: 'd.ambesi@avans.nl',
            mood: UserMood.Sad,
            gender: UserGender.Male,
            password: 'secret',
            isActive: true,
            profileImgUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
            coins: 0
        },
        {
            _id: '3',
            name: 'Marieke Jansen',
            emailAddress: 'm.jansen@server.nl',
            mood: UserMood.Happy,
            gender: UserGender.Female,
            password: 'secret',
            isActive: false,
            profileImgUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
            coins: 0
        },
        {
            _id: '4',
            name: 'Jan Montizaan',
            emailAddress: 'j.montizaan@avans.nl',
            mood: UserMood.Moderate,
            gender: UserGender.Male,
            password: 'secret',
            isActive: true,
            profileImgUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
            coins: 0
        }
    ];

    constructor() {
        console.log('UserService created');
    }

    getUsers(): IUserInfo[] {
        console.log('getUsers() aangeroepen');
        return this.users;
    }

    getUsersAsObservable(): Observable<IUserInfo[]> {
        console.log('getUsersAsObservable() aangeroepen');
        // 'of' is een rxjs operator die een Observable
        // maakt van de gegeven data.
        return of(this.users).pipe(delay(2000));
    }

    getUserById(id: string | null): IUserInfo {
        console.log('getUserById() aangeroepen');
        return this.users.filter((user) => user._id === id)[0];
    }
    updateUser(user: IUserInfo): void {
        console.log('updateUser() aangeroepen');
        const userToUpdate = this.getUserById(user._id);
        console.log('updateUser() id:', userToUpdate?._id);
        if (userToUpdate) {
            userToUpdate.name = user.name;
            userToUpdate.emailAddress = user.emailAddress;

            userToUpdate.mood = user.mood;
            userToUpdate.gender = user.gender;
        }
    }
}
