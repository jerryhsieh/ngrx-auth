import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: '',
        component: NavbarComponent,
        outlet: 'navbar'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
