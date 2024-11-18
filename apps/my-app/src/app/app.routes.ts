import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {
    UserListComponent,
    UserDetailsComponent,
    UserEditComponent
} from '@avans-nx-workshop/features';
import { NgModule } from '@angular/core';

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', pathMatch: 'full', component: UserListComponent },
    // users/new moet voor users/:id, omdat new anders als de id wordt gezien.
    // Volgorde is belangrijk in routing.
    { path: 'users/new', pathMatch: 'full', component: UserEditComponent },
    { path: 'users/:id', pathMatch: 'full', component: UserDetailsComponent },
    { path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent },

    // Catch-all route: als er geen URL match is gaan we naar component-a (of dashboard, of naar 404)
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
