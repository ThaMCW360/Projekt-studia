import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { LoginComponent } from './login/login.component';
 import { LogoutComponent } from './logout/logout.component';
 import { ProfileComponent } from './profile/profile.component';
 import { ToDoComponent } from './to-do/to-do.component';

const appRoutes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'profile', component: ProfileComponent },
{ path: '', component: ProfileComponent },
{ path: 'logout', component: LogoutComponent },
{ path: 'todo', component: ToDoComponent }
// { path: '', redirectTo: "/dsds", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
