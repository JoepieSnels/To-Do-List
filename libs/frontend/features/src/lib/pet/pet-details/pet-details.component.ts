import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPet } from '@avans-nx-workshop/shared/api';
import { PetService } from '../pet.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-workshop-pet-details',
    templateUrl: './pet-details.component.html',
    styles: []
})
export class PetDetailsComponent implements OnInit, OnDestroy {
    petId!: string | null;
    pet: IPet | null = null;
    sub!: Subscription;

    constructor(
        private route: ActivatedRoute,
        private petService: PetService
    ) {}

    ngOnInit(): void {
        console.log('PetDetailsComponent onInit');

        // Subscribe to route param changes
        this.sub = this.route.paramMap.subscribe((params) => {
            this.petId = params.get('id');
            console.log('PetDetailsComponent onInit, id:', this.petId);

            // Fetch the pet details from the service
            if (this.petId) {
                this.petService.getPetById(this.petId).subscribe({
                    next: (pet) => {
                        this.pet = pet;
                        console.log('Got pet:', this.pet);
                    },
                    error: (err) => {
                        console.error('Error fetching pet:', err);
                    }
                });
            }
        });
    }

    ngOnDestroy(): void {
        console.log('PetDetailsComponent onDestroy');
        if (this.sub) {
            console.log('unsubscribing');
            this.sub.unsubscribe();
        }
    }
}
