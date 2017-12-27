//
//
// File name : member.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member/member.component';
import { MembarComponent } from './membar/membar.component';

@NgModule({
    imports: [
        CommonModule,
        MemberRoutingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatIconModule
    ],
    declarations: [MemberComponent, MembarComponent]
})
export class MemberModule { }
