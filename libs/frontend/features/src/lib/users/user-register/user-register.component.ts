import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { UserGender } from '@avans-nx-workshop/shared/api';
import { User } from '@avans-nx-workshop/backend/user';

@Component({
    selector: 'avans-nx-workshop-user-register',
    templateUrl: './user-register.component.html'
})
export class UserRegisterComponent {
    @ViewChild('nameInput') nameInputRef!: ElementRef;
    @ViewChild('emailInput') emailInputRef!: ElementRef;
    @ViewChild('passwordInput') passwordInputRef!: ElementRef;
    @ViewChild('genderInput') genderInputRef!: ElementRef;
    @ViewChild('profilePictureInput') profilePictureInputRef!: ElementRef;

    genders: UserGender[] = [
        UserGender.Male,
        UserGender.Female,
        UserGender.None,
        UserGender.Unknown
    ];

    constructor(private userService: UserService) {}

    OnInit(): void {
        console.log('UserRegisterComponent onInit');
    }

    ngOnDestroy(): void {
        console.log('UserRegisterComponent onDestroy');
    }
}
