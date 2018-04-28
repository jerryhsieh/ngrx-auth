//
//
// File name : member-routing.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report/report.component';
import { ReportListComponent } from './report-list/report-list.component';

import { ViewportComponent } from './viewport/viewport.component';
import * as fromGuards from '../guards';

const routes: Routes = [
    {
        path: '',
        canActivateChild: [fromGuards.ReportGuard],
        children: [
            { path: 'report-list', component: ReportListComponent },
            { path: 'report/:rptId', canActivate: [fromGuards.ReportExistGuard], component: ReportComponent },
            { path: 'viewport', component: ViewportComponent },
            { path: '', redirectTo: 'report-list', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRoutingModule { }
