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
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './not-found.component';
import { MembarComponent } from './membar/membar.component';

// all guards
import * as fromGuards from './guards';

import { UserService } from './users/service/user.service';
import { ShareModule } from './share.module';
import { AppConfig } from './app.config';

import { UtilsService, TOKEN } from './helper/utils.service';
import { JwtModule, JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { StartupService } from './services/startup.service';

// for ngrx/store
import { StoreModule } from '@ngrx/store';
import * as store from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

export function startupServiceFactory(startupService: StartupService): Function { return () => startupService.load(); }

export function jwtOptionsFactory() {
    return {
        tokenGetter: () => {
            return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000']
    }
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        PageNotFoundComponent,
        MembarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ShareModule,
        StoreModule.forRoot(store.reducers),
        EffectsModule.forRoot(store.effects),
        !environment.production ? StoreRouterConnectingModule : [],
        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtOptionsFactory
            }
        })

    ],
    providers: [
        ...fromGuards.guards,
        UserService,
        UtilsService,
        AppConfig,
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: startupServiceFactory,
            deps: [StartupService, Injector],
            multi: true
        },
        { provide: RouterStateSerializer, useClass: store.CustomeSerializer }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
