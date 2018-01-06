//
//
// File name : member-routing.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './member/member.component';
import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report-list/report-list.component';


import * as fromGuards from '../guards';

const routes: Routes = [
    {
        path: '',
        component: MemberComponent,
        canActivateChild: [fromGuards.ReportGuard],
        children: [
            { path: 'report-list', component: ReportListComponent },
            { path: 'report/:rptId', canActivate: [fromGuards.ReportExistGuard], component: ReportComponent },
            { path: '', redirectTo: 'report-list', pathMatch: 'full' }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRoutingModule { }
