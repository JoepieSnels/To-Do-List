import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { IUserInfo, UserGender, UserMood } from '@avans-nx-workshop/shared/api';
import { HttpClient } from '@angular/common/http';
import { environment } from '@avans-nx-workshop/shared/util-env';

import { ApiResponse } from '@avans-nx-workshop/shared/api';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly users?: IUserInfo[];

    constructor(private http: HttpClient) {
        console.log('UserService created');
    }

    // getUsers(): IUserInfo[] {
    //     console.log('getUsers() aangeroepen');
    //     return this.users;
    // }
    getUsersAsync(): Observable<IUserInfo[]> {
        console.log('getUsersAsync() aangeroepen');
        return this.http
            .get<ApiResponse<any>>(environment.dataApiUrl + '/user')
            .pipe(map((response) => response.results));
    }

    // getUsersAsObservable(): Observable<IUserInfo[]> {
    //     console.log('getUsersAsObservable() aangeroepen');
    //     // 'of' is een rxjs operator die een Observable
    //     // maakt van de gegeven data.
    //     return of(this.users).pipe(delay(2000));
    // }

    getUserById(id: string | null): IUserInfo {
        console.log('getUserById() aangeroepen');
        return this.users!.filter((user) => user._id === id)[0];
    }
    getUserByIdAsync(id: string | null): Observable<IUserInfo> {
        console.log('getUserByIdAsync() aangeroepen');
        return this.http
            .get<any>(environment.dataApiUrl + '/user/' + id)
            .pipe(map((response) => response.results));
    }

    updateUserAsync(user: IUserInfo): Observable<IUserInfo> {
        console.log('updateUserAsync() aangeroepen');
        return this.http
            .put<any>(environment.dataApiUrl + '/user/' + user._id, user)
            .pipe(map((response) => response.results));
    }
}
