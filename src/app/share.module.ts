//
//
// File name : 
// Created by: Jerry Hsieh @ 2017-12-28
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { NgModule } from '@angular/core';

import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { ReportService } from './member/service/report.service';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatMenuModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatMenuModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    providers: [ReportService]
})



export class ShareModule { }
