import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { IPet, IPetCreate } from '@avans-nx-workshop/shared/api';
import { HttpClient } from '@angular/common/http';
import { environment } from '@avans-nx-workshop/shared/util-env';

import { ApiResponse } from '@avans-nx-workshop/shared/api';

@Injectable({
    providedIn: 'root'
})
export class PetService {
    readonly pets?: IPet[];
    constructor(private http: HttpClient) {}

    getPetsAsync(): Observable<IPet[]> {
        console.log('getPetsAsync() aangeroepen');
        return this.http
            .get<ApiResponse<any>>(environment.dataApiUrl + '/pet')
            .pipe(map((response) => response.results));
    }

    // Change this method to return an observable
    getPetById(id: string | null): Observable<IPet> {
        console.log('getPetById() aangeroepen');
        return this.http
            .get<ApiResponse<IPet>>(environment.dataApiUrl + '/pet/' + id)
            .pipe(
                map((response) => {
                    if (!response.results) {
                        throw new Error('Pet not found');
                    }
                    return response.results as IPet;
                })
            );
    }

    createPetAsync(pet: IPetCreate): Observable<IPet> {
        console.log('createPetAsync() aangeroepen');
        console.log(pet);
        return this.http
            .post<any>(environment.dataApiUrl + '/pet', pet)
            .pipe(map((response) => response.results));
    }

    updatePetAsync(pet: IPet): Observable<IPet> {
        console.log('updatePetAsync() aangeroepen');
        return this.http
            .put<any>(environment.dataApiUrl + '/pet/' + pet._id, pet)
            .pipe(map((response) => response.results));
    }
}
