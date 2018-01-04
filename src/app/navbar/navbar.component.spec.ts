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

import { ShareModule } from '../share.module';
import { Store } from '@ngrx/store';

// mock data and service
class UserServiceStub {
    getLoginStatus = jasmine.createSpy('getLoginStatus')
        .and.returnValue(Observable.of(true));

    logout = jasmine.createSpy('logout')
        .and.returnValue(true);
}

class RouterStub {
    navigateByUrl(url: string) { return url; }
}

class MockStore {
    public dispatch(obj) {
        console.log('dispatching from the mock store!')
    }
    public select(obj) {
        console.log('selecting from the mock store!');
        return Observable.of(true)
    }
}


describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            imports: [
                ShareModule
            ],
            providers: [
                { provide: UserService, useClass: UserServiceStub },
                { provide: Router, useClass: RouterStub },
                { provide: Store, useClass: MockStore }
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
