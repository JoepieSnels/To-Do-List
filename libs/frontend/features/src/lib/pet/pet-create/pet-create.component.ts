import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetService } from '../pet.service';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-workshop-pet-create',
    templateUrl: './pet-create.component.html'
})
export class PetCreateComponent implements OnInit, OnDestroy {
    subscription?: Subscription;

    constructor(private petService: PetService) {}

    name = new FormControl('', Validators.required);
    breed = new FormControl('', Validators.required);
    lastFed = new FormControl(new Date().toISOString().split('T')[0], [
        Validators.required
    ]); // Default to today's date

    ngOnInit(): void {
        console.log('PetCreateComponent onInit');
    }

    ngOnDestroy(): void {
        console.log('PetCreateComponent onDestroy');
    }

    onSubmit() {
        console.log('PetCreateComponent onSubmit');
        this.subscription = this.petService
            .createPetAsync({
                name: this.name.value as string,
                breed: this.breed.value as string,
                imgUrl: 'https://cdn-icons-png.flaticon.com/512/219/219969.png' as string,
                lastFed: this.lastFed.value as string,
                energetic: false,
                sick: false
            })
            .subscribe();
    }
}
