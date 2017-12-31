//
//
// File name : navbar.component.spect.ts
// Created by: Jerry Hsieh @ 2018-01-01
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material'

import { UserService } from '../users/service/user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    class UserServiceStub {
        getLoginStatus = jasmine.createSpy('getLoginStatus')
            .and.returnValue(Observable.of(true));

        logout = jasmine.createSpy('logout')
            .and.returnValue(true);
    }

    class RouterStub {
        navigateByUrl(url: string) { return url; }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            imports: [
                MatToolbarModule,
                MatButtonModule
            ],
            providers: [
                { provide: UserService, useClass: UserServiceStub },
                { provide: Router, useClass: RouterStub }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
