//
//
// File name : app-routing.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './navbar/navbar.component';
import { MembarComponent } from './membar/membar.component';
import { PageNotFoundComponent } from './not-found.component';

import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    {
        path: '',
        component: NavbarComponent,
        children: [
            { path: 'users', loadChildren: './users/users.module#UsersModule' },         // lazy loading
            { path: 'home', component: HomeComponent },
        ]
    },
    {
        path: '',
        component: MembarComponent,
        children: [
            { path: 'member', loadChildren: './member/member.module#MemberModule', canLoad: [AuthGuard] },     // lazy loading

        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        //{ preloadingStrategy: PreloadAllModules }
        //{ enableTracing: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
