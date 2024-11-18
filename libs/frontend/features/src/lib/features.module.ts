import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RouterModule, Route } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        UserDetailsComponent,
        UserDetailsComponent,
        UserListComponent,
        UserEditComponent,
        UserEditComponent
    ],
    exports: [UserListComponent, UserDetailsComponent, UserEditComponent]
})
export class FeaturesModule {}
