//
//
// File name : app-routing.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './not-found.component';
import { MembarComponent } from './member/membar/membar.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    {
        path: '', children: [
            { path: 'users', loadChildren: './users/users.module#UsersModule' },         // lazy loading
            { path: 'member', loadChildren: './member/member.module#MemberModule', canLoad: [AuthGuard] },     // lazy loading
            { path: 'home', component: HomeComponent },
            { path: '', component: NavbarComponent, outlet: 'navbar' },
            { path: '', pathMatch: 'full', redirectTo: '/home' },
            { path: '**', component: PageNotFoundComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        //{ enableTracing: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
