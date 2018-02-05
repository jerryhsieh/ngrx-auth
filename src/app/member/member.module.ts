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

import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ViewportComponent } from './viewport/viewport.component';
//import { ReportSelectService } from './service/report-select.service';

@NgModule({
    imports: [
        CommonModule,
        MemberRoutingModule,
        ShareModule
    ],
    declarations: [ReportComponent, ReportListComponent, ViewportComponent],
    providers: []
})
export class MemberModule { }
