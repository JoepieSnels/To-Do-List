import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnDestroy, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { IPet } from '@avans-nx-workshop/shared/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-workshop-pet-list',

    templateUrl: './pet-list.component.html'
})
export class PetListComponent implements OnInit, OnDestroy {
    pets: IPet[] | undefined = undefined;
    sub?: Subscription;

    constructor(private petService: PetService) {}

    ngOnInit(): void {
        console.log('PetListComponent onInit');
        this.petService.getPetsAsync().subscribe((pets) => {
            this.pets = pets;
            console.log(this.pets);
        });
    }

    ngOnDestroy(): void {}
}
