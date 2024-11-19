import { Component } from '@angular/core';
import { UserService } from '@avans-nx-workshop/features';
import { IUserInfo } from '@avans-nx-workshop/shared/api';

@Component({
    selector: 'avans-nx-workshop-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private userService: UserService) {}
    users: IUserInfo[] = this.userService.getUsers();
}
