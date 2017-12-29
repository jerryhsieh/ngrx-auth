//
//
// File name : 
// Created by: Jerry Hsieh @ 2017-12-28
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { NgModule } from '@angular/core';

import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
        FlexLayoutModule
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
        FlexLayoutModule
    ]
})



export class ShareModule { }
