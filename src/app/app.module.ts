//
//
// File name : app.module.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './not-found.component';

import { AuthGuard } from './services/auth.guard';
import { UserService } from './users/service/user.service';

import { UtilsService } from './helper/utils.service';
import { JwtModule } from '@auth0/angular-jwt';
import { StartupService } from './services/startup.service';

export function startupServiceFactory(startupService: StartupService): Function { return () => startupService.load(); }

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        FlexLayoutModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('access_token');
                },
                whitelistedDomains: ['localhost:3000']
            }
        })

    ],
    providers: [
        AuthGuard,
        UserService,
        UtilsService,
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: startupServiceFactory,
            deps: [StartupService, Injector],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
