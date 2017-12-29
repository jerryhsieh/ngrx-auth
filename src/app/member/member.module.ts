//
//
// File name : member.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member/member.component';

import { ReportService } from './service/report.service';
import { ReportComponent } from './report/report.component';

@NgModule({
    imports: [
        CommonModule,
        MemberRoutingModule,
        ShareModule
    ],
    declarations: [MemberComponent, ReportComponent],
    providers: [ReportService]
})
export class MemberModule { }
