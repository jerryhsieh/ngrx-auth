import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'

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

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
