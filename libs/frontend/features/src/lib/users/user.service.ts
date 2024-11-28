import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import {
    IUserInfo,
    IUserRegistration,
    UserGender,
    UserMood
} from '@avans-nx-workshop/shared/api';
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

    createUserAsync(user: IUserRegistration): Observable<IUserRegistration> {
        console.log('createUserAsync() aangeroepen');
        return this.http
            .post<any>(environment.dataApiUrl + '/auth/register', user)
            .pipe(map((response) => response.results));
    }

    getUsersAsync(): Observable<IUserInfo[]> {
        console.log('getUsersAsync() aangeroepen');
        return this.http
            .get<ApiResponse<any>>(environment.dataApiUrl + '/user')
            .pipe(map((response) => response.results));
    }

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
