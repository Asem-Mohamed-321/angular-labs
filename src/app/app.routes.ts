import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ErrorComponent } from './error/error.component';
import { UserDetailsComponent } from './user-details/user-details.component';


export const routes: Routes = [
    {path: '',component: UsersComponent},
    {path: 'users',component: UsersComponent},
    {path : 'add-user' , component: AddUsersComponent},
    {path : 'user-details/:id', component: UserDetailsComponent},
    {path : '**' , component: ErrorComponent}
];
