import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
    viewChild
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
    @ViewChild('moodSelect') moodSelectRef!: ElementRef;
    @ViewChild('genderSelect') genderSelectRef!: ElementRef;
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
    gender: UserGender[] = [
        UserGender.Male,
        UserGender.Female,
        UserGender.None,
        UserGender.Unknown
    ];

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) {}
    ngOnInit(): void {
        console.log('UserDetailComponent onInit');
        // Deze manier is statisch: bij navigatie krijgen we niet de nieuwe id uit de URL.
        // this.userId = this.route.snapshot.paramMap.get('id');

        // Deze manier maakt gebruik van RxJs Observables.
        this.sub = this.route.paramMap.subscribe((params) => {
            this.userId = params.get('id');
            this.user = this.userService.getUserById(this.userId);
            console.log('Got user ' + this.user.name);
        });
    }

    ngOnDestroy(): void {
        console.log('UserDetailComponent onDestroy');
        if (this.sub) {
            this.sub.unsubscribe();
        }

        if (this.user && this.nameInputRef) {
            this.user.name = this.nameInputRef.nativeElement.value;
            this.user.mood = this.moodSelectRef.nativeElement.value;
            this.user.gender = this.genderSelectRef.nativeElement.value;
            this.user.emailAddress = this.emailInputRef.nativeElement.value;
            this.userService.updateUser(this.user);
            console.log('Updated user:', this.user);
        }
    }
}
