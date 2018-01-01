//
//
// File name : app-routing.module.spec.ts
// Created by: Jerry Hsieh @ 2018-01-01
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { Location } from '@angular/common';
import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Routes, RouterModule, Router } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './not-found.component';
import { ShareModule } from './share.module';

import { UserService } from './users/service/user.service';
import { Observable } from 'rxjs/Observable';

describe('app-routing', () => {
    let location: Location;
    let router: Router;
    let fixture;
    class UserServiceStub {
        getLoginStatus = jasmine.createSpy('getLoginStatus')
            .and.returnValue(Observable.of(true));

        logout = jasmine.createSpy('logout')
            .and.returnValue(true);
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes),
                ShareModule
            ],
            declarations: [
                AppComponent,
                HomeComponent,
                NavbarComponent,
                PageNotFoundComponent
            ],
            providers: [
                { provide: UserService, useClass: UserServiceStub }
            ]
        });
        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it('navigate to "" redirect to /home ', async(() => {
        router.navigate(['']).then(() => {
            expect(location.path()).toBe('/home');
            console.log('after expect');
        })

    }));

    it('navigate to /home', async(() => {
        router.navigate(['/home']).then(() => {
            expect(location.path()).toBe('/home');
        })

    }));


})
