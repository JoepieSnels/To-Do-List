import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'avans-nx-workshop-user-register',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-register.component.html',
    styles: ``
})
export class UserRegisterComponent implements OnInit, OnDestroy {
    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) {}

    ngOnInit() {}
}
