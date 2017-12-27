//
//
// File name : users.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        HttpClientModule,

    ],
    providers: [

    ],
    declarations: [
        LoginComponent
    ]
})
export class UsersModule { }
