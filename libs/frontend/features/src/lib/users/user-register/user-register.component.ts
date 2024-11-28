import { Component, OnDestroy, OnInit, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserGender } from '@avans-nx-workshop/shared/api';
import { Validate } from 'class-validator';
import { Subscription } from 'rxjs';

@Component({
    selector: 'avans-nx-workshop-user-register',
    templateUrl: './user-register.component.html',
    styles: ``
})
export class UserRegisterComponent implements OnInit, OnDestroy {
    genders = Object.values(UserGender);
    subscription?: Subscription;

    name = new FormControl('', Validators.required);
    email = new FormControl('', Validators.required);
    password = new FormControl('', Validators.required);
    profilePicture = new FormControl('');
    gender = new FormControl('', Validators.required);

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit() {
        console.log('UserRegisterComponent onInit');
    }

    ngOnDestroy() {
        console.log('UserRegisterComponent onDestroy');
    }
    OnSubmit() {
        console.log('UserRegisterComponent onSubmit');
        this.subscription = this.userService
            .createUserAsync({
                name: this.name.value as string,
                emailAddress: this.email.value as string,
                password: this.password.value as string,
                profileImgUrl: this.profilePicture.value as string,
                gender: this.gender.value as UserGender
            })
            .subscribe();
    }
}
