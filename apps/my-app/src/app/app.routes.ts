import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import {
    PetCreateComponent,
    UserDetailsComponent,
    UserEditComponent,
    UserListComponent,
    UserRegisterComponent,
    PetListComponent,
    PetDetailsComponent
} from '@avans-nx-workshop/features';

export const appRoutes: Route[] = [
    // Hier komen onze URLs te staan.
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register', pathMatch: 'full', component: UserRegisterComponent },
    { path: 'about', pathMatch: 'full', component: AboutComponent },
    { path: 'users', pathMatch: 'full', component: UserListComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'users/new', component: UserEditComponent },
    { path: 'users/:id/edit', component: UserEditComponent },
    { path: 'pets', pathMatch: 'full', component: PetListComponent },
    { path: 'pets/new', component: PetCreateComponent },
    { path: 'pets/:id', component: PetDetailsComponent },
    { path: '**', redirectTo: 'dashboard' }
];
