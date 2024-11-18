import { Component, OnInit } from '@angular/core';
import { IUserInfo } from '@avans-nx-workshop/shared/api';
import { UserService } from '@avans-nx-workshop/features';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'avans-nx-workshop-user-details',
    templateUrl: './user-details.component.html',
    styles: []
})
export class UserDetailsComponent implements OnInit {
    userId: number | null = null;
    user: IUserInfo | null = null;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.userId = Number(params.get('id'));
            if (this.userId) {
                this.user = this.userService.getUserById(this.userId);
            }
        });
    }
}
