import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { RouterModule } from '@angular/router';
import { UserService } from './users/user.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetService } from './pet/pet.service';
import { PetCreateComponent } from './pet/pet-create/pet-create.component';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetDetailsComponent } from './pet/pet-details/pet-details.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    declarations: [
        UserDetailsComponent,
        UserListComponent,
        UserEditComponent,
        UserRegisterComponent,
        PetCreateComponent,
        PetListComponent,
        PetDetailsComponent
    ],
    providers: [UserService, PetService, provideHttpClient()]
})
export class FeaturesModule {}
