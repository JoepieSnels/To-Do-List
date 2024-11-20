import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IUserInfo, UserMood, UserGender } from '@avans-nx-workshop/shared/api';
import { UserService } from '@avans-nx-workshop/features';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'avans-nx-workshop-user-edit',
    templateUrl: './user-edit.component.html',
    styles: []
})
export class UserEditComponent implements OnInit, OnDestroy {
    @ViewChild('nameInput') nameInputRef!: ElementRef;
    @ViewChild('emailInput') emailInputRef!: ElementRef;

    userId!: string | null;
    user: IUserInfo | null = null;
    sub!: Subscription;

    moods: UserMood[] = [
        UserMood.Mad,
        UserMood.Happy,
        UserMood.Sad,
        UserMood.Moderate
    ];

    selectedMood: UserMood | null = null;

    genders: UserGender[] = [
        UserGender.Male,
        UserGender.Female,
        UserGender.None,
        UserGender.Unknown
    ];

    selectedGender: UserGender | null = null;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        console.log('UserDetailComponent onInit');

        // Haal userId op vanuit de URL en laad de gebruiker
        this.sub = this.route.paramMap.subscribe((params) => {
            this.userId = params.get('id');

            if (this.userId) {
                this.userService
                    .getUserByIdAsync(this.userId)
                    .subscribe((user) => {
                        this.user = user;
                        console.log('Got user ' + this.user?._id);

                        // Update de geselecteerde waarden op basis van de geladen gebruiker
                        this.selectedMood = this.user?.mood || null;
                        this.selectedGender = this.user?.gender || null;
                    });
            }
        });
    }

    saveChanges(): void {
        console.log('Saving changes');
        if (this.user) {
            this.user.name = this.nameInputRef.nativeElement.value;
            this.user.mood = this.selectedMood as UserMood; // Gebruik databinding
            this.user.gender = this.selectedGender as UserGender;
            this.user.emailAddress = this.emailInputRef.nativeElement.value;

            this.userService.updateUserAsync(this.user).subscribe({
                next: (updatedUser) => {
                    console.log('Updated user:', updatedUser);
                },
                error: (err) => {
                    console.error('Failed to update user:', err);
                }
            });
        }
    }
    ngOnDestroy(): void {
        console.log('UserDetailComponent onDestroy');

        // Unsubscribe van de route parameter observer
        if (this.sub) {
            this.sub.unsubscribe();
        }

        // Bewaar wijzigingen voordat de component wordt vernietigd
    }
}
