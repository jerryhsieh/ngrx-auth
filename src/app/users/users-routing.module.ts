//
//
// File name : users-routing.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
